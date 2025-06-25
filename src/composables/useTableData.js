import { ref, computed, watch } from 'vue';
import { initialTableData, initialFilters } from '../data/trendingSearchesData.js';

export function useTableData() {
    const tableData = ref([...initialTableData]);
    const filters = ref({ ...initialFilters });
    const sort = ref({ key: '', asc: true });
    const pageSize = ref(10);
    const currentPage = ref(1);
    const selectedRows = ref([]);

    const filteredAndSortedDataRaw = computed(() => {
        let data = [...tableData.value];

        if (filters.value.id) {
            data = data.filter(row => String(row.id).includes(filters.value.id));
        }
        if (filters.value.provider && filters.value.provider !== 'all') {
            data = data.filter(row => row.provider.toLowerCase().includes(filters.value.provider.toLowerCase()));
        }
        if (filters.value.name) {
            data = data.filter(row => row.name.toLowerCase().includes(filters.value.name.toLowerCase()));
        }
        if (filters.value.price) {
            data = data.filter(row => String(row.price).includes(filters.value.price));
        }
        if (filters.value.min !== '1') {
            data = data.filter(row => row.min >= parseInt(filters.value.min));
        }
        if (filters.value.max !== '100') {
            data = data.filter(row => row.max <= parseInt(filters.value.max));
        }
        if (filters.value.features) {
            const searchFeatures = filters.value.features.toLowerCase();
            data = data.filter(row =>
                row.features.some(feature => feature.toLowerCase().includes(searchFeatures))
            );
        }
        if (filters.value.inProgress !== 'all') {
            data = data.filter(row => row.status.inProgress?.includes(filters.value.inProgress));
        }
        if (filters.value.complete !== 'all') {
            data = data.filter(row => row.status.complete?.includes(filters.value.complete));
        }
        if (filters.value.status !== 'all') {
            data = data.filter(row => row.status.status?.includes(filters.value.status));
        }

        if (sort.value.key) {
            data.sort((a, b) => {
                let aValue = sort.value.key.includes('status') ? a.status[sort.value.key.split('.')[1]] : a[sort.value.key];
                let bValue = sort.value.key.includes('status') ? b.status[sort.value.key.split('.')[1]] : b[sort.value.key];

                if (sort.value.key === 'level') {
                    aValue = Number(aValue);
                    bValue = Number(bValue);
                } else if (typeof aValue === 'string') {
                    aValue = aValue.toLowerCase();
                    bValue = bValue.toLowerCase();
                }

                if (aValue < bValue) return sort.value.asc ? -1 : 1;
                if (aValue > bValue) return sort.value.asc ? 1 : -1;
                return 0;
            });
        }

        return data;
    });

    const filteredAndSortedData = computed(() => {
        const start = (currentPage.value - 1) * pageSize.value;
        const end = start + pageSize.value;
        return filteredAndSortedDataRaw.value.slice(start, end);
    });

    const totalPages = computed(() => {
        return Math.ceil(filteredAndSortedDataRaw.value.length / pageSize.value);
    });

    const setSort = (key) => {
        if (sort.value.key === key) {
            sort.value.asc = !sort.value.asc;
        } else {
            sort.value.key = key;
            sort.value.asc = true;
        }
    };

    const toggleSelectAll = () => {
        if (selectedRows.value.length === filteredAndSortedDataRaw.value.length) {
            selectedRows.value = [];
        } else {
            selectedRows.value = filteredAndSortedDataRaw.value.map(row => row.id);
        }
    };

    const toggleActivate = (row) => {
        row.activated = !row.activated;
    };

    const toggleFavourite = (row) => {
        row.favourite = !row.favourite;
    };

    watch(pageSize, () => {
        currentPage.value = 1;
    });

    watch(filteredAndSortedDataRaw, () => {
        const currentIds = new Set(filteredAndSortedDataRaw.value.map(r => r.id));
        selectedRows.value = selectedRows.value.filter(id => currentIds.has(id));
    });

    return {
        tableData,
        filters,
        sort,
        pageSize,
        currentPage,
        selectedRows,
        filteredAndSortedData,
        filteredAndSortedDataRaw,
        totalPages,
        setSort,
        toggleSelectAll,
        toggleActivate,
        toggleFavourite
    };
} 
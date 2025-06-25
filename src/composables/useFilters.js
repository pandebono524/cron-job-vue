import { ref } from 'vue';

export function useFilters() {
    const selectedFilters = ref([]);

    const addFilter = (type, value) => {
        if (!selectedFilters.value.find(f => f.type === type && f.value === value)) {
            selectedFilters.value.push({ type, value });
        }
    };

    const removeFilter = (index) => {
        selectedFilters.value.splice(index, 1);
    };

    const clearAllFilters = () => {
        selectedFilters.value = [];
    };

    return {
        selectedFilters,
        addFilter,
        removeFilter,
        clearAllFilters
    };
} 
<template>
    <div class="flex flex-col gap-2 w-full pl-[30px] pb-6">
        <div class="flex flex-wrap gap-2">
            <div v-for="(options, key) in filterOptions" :key="key" class="relative min-w-[160px] max-w-[220px]">
                <CustomDropdown :model-value="selectedValues[key] ?? null"
                    :options="[{ label: 'All', value: 'All' }, ...options.map(opt => ({ label: opt, value: opt }))]"
                    :placeholder="getFilterLabel(key)" @update:modelValue="val => onDropdownSelect(key, val)" />
            </div>
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
            <div v-for="(filter, idx) in selectedFilters" :key="filter.type + filter.value"
                class="flex items-center bg-[#F8F4FE] rounded-full px-4 py-2 text-gray-700">
                <span>
                    <span class="font-medium text-[13px] md:text-[16px]">{{ filter.type.charAt(0).toUpperCase()
                        + filter.type.slice(1)
                    }}</span>
                    <span v-if="filter.value">: <span class="font-bold text-[13px] md:text-[16px]">{{
                        filter.value }}</span></span>
                </span>
                <button class="ml-2 text-gray-400 hover:text-gray-700" @click="removeFilter(idx)">×</button>
            </div>
            <button v-if="selectedFilters.length" class="ml-4 underline text-black font-medium"
                @click="clearAllFilters">
                Clear All Filters
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CustomDropdown from './CustomDropdown.vue';

const props = defineProps({
    filterOptions: {
        type: Object,
        required: true
    },
    selectedFilters: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['addFilter', 'removeFilter', 'clearAllFilters']);

const selectedValues = ref({});

const addFilter = (type, value) => {
    emit('addFilter', type, value);
};

const removeFilter = (index) => {
    emit('removeFilter', index);
};

const clearAllFilters = () => {
    emit('clearAllFilters');
    selectedValues.value = {};
};

const onDropdownSelect = (key, val) => {
    selectedValues.value[key] = val;
    addFilter(key, val);
};

const getFilterLabel = (key) => {
    const labels = {
        providers: 'Providers',
        price: 'Price',
        quantity: 'Quantity',
        options: 'Options',
        dateRange: 'Date Range'
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
};

const handleClickOutside = (event) => {
    const dropdowns = document.querySelectorAll('.relative');
    let clickedInside = false;

    dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
            clickedInside = true;
        }
    });

    if (!clickedInside) {
        openDropdowns.value = {};
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
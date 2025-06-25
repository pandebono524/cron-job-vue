<template>
    <div class="flex flex-col gap-2 w-full pl-[30px] pb-6">
        <div class="flex flex-wrap gap-2">
            <div v-for="(options, key) in filterOptions" :key="key" class="relative" :class="getSelectClass(key)">
                <button @click="toggleDropdown(key)"
                    class="w-full rounded-full text-black bg-[#F8F4FE] px-4 py-2 outline-none cursor-pointer font-ibm font-medium text-[16px] leading-[27px] tracking-[0%] flex items-center justify-between"
                    :class="openDropdowns[key] ? 'ring-2 ring-purple-200' : ''">
                    <span class="text-left">{{ getFilterLabel(key) }}</span>
                    <Svg name="arrow-down" class="w-4 h-4 ml-2 transition-transform duration-200"
                        :class="openDropdowns[key] ? 'rotate-180' : ''"></Svg>
                </button>
                <div v-if="openDropdowns[key]"
                    class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    <div v-for="option in options" :key="option" @click="selectOption(key, option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left font-ibm text-[14px] leading-[20px]"
                        :class="getSelectedValue(key) === option ? 'bg-purple-50 text-purple-700' : 'text-gray-700'">
                        {{ option }}
                    </div>
                </div>
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
import Svg from './Svg.vue';

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

const openDropdowns = ref({});
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
    openDropdowns.value = {};
};

const toggleDropdown = (key) => {
    // Close all other dropdowns
    Object.keys(openDropdowns.value).forEach(k => {
        if (k !== key) {
            openDropdowns.value[k] = false;
        }
    });

    // Toggle current dropdown
    openDropdowns.value[key] = !openDropdowns.value[key];
};

const selectOption = (key, option) => {
    selectedValues.value[key] = option;
    openDropdowns.value[key] = false;
    addFilter(key, option);
};

const getSelectedValue = (key) => {
    return selectedValues.value[key];
};

const getSelectClass = (key) => {
    const widthClass = key === 'max-w-[200px]';
    return widthClass;
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

// Close dropdowns when clicking outside
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
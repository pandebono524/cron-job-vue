<template>
    <div class="flex flex-col gap-[30px] [background:linear-gradient(180deg,#F8F4FE_0%,#EADCFF_100%)] p-8">
        <TrendingCards :cards="trendingCards" />
        <div class="flex flex-col pt-10 pb-5 px-2 bg-white rounded-lg w-full">
            <SearchHeader />
            <FilterSection
                :filterOptions="filterOptions"
                :selectedFilters="selectedFilters"
                @addFilter="addFilter"
                @removeFilter="removeFilter"
                @clearAllFilters="clearAllFilters"
            />
            <TableHeader :pageSize="pageSize" :pageSizeOptions="pageSizeOptions" @update:pageSize="val => pageSize = val" />
            <DataTable
                :tableData="filteredAndSortedData"
                :filters="filters"
                :sort="sort"
                v-model:selectedRows="selectedRows"
                @setSort="setSort"
                @toggleSelectAll="toggleSelectAll"
                @toggleActivate="toggleActivate"
                @toggleFavourite="toggleFavourite"
            />
            <div class="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center pt-9">
                <div class="flex flex-col md:flex-row gap-2 pl-8.5">
                    <span class="font-ibm text-black font-normal text-[16px] leading-[27px] tracking-[0%]">
                        Showing 1 to 10 of 50,000 services.
                    </span>
                    <span
                        class="relative font-ibm cursor-pointer font-semibold text-[16px] leading-[27px] tracking-[0%] bg-premium-gradient from-premium-start to-premium-end bg-clip-text text-transparent w-fit">
                        Show 6,135 more services.
                        <span
                            class="absolute left-0 right-0 bottom-0 h-[2px] w-full bg-premium-gradient from-premium-start to-premium-end"></span>
                    </span>
                </div>
                <div class="flex flex-row justify-center items-center">
                    <div class="relative rounded-md"
                        :class="currentPage === 1 ? 'opacity-50' : ''"
                        style="background: linear-gradient(90deg, rgba(200, 35, 155, 0.1) 7.73%, rgba(89, 68, 223, 0.1) 95.41%); padding: 2px; box-shadow: 0px 1px 2px 0px #1018280D;">
                        <button :disabled="currentPage === 1" @click="currentPage--"
                            class="w-9 h-9 flex items-center justify-center rounded-md bg-white outline-none border-0 cursor-pointer"
                            :class="currentPage === 1 ? 'text-gray-300' : 'text-gray-700'">
                            <Svg name="arrow-left" class="w-5 h-5 text-black"></Svg>
                        </button>
                    </div>

                    <div class="flex gap-2 items-center justify-between px-2">
                        <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                            class="font-ibm text-[16px] leading-[27px] px-2 outline-none" :class="currentPage === page
                                ? 'font-bold bg-clip-text text-transparent'
                                : 'font-normal text-[#323232]'" :style="currentPage === page ? {
                                    background: 'linear-gradient(90deg, #C5269A 9.05%, #4E43E5 94.4%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                } : {}">
                            {{ page }}
                        </button>
                    </div>

                    <div class="relative rounded-md"
                        :class="currentPage === totalPages ? 'opacity-50' : ''"
                        style="background: linear-gradient(90deg, rgba(200, 35, 155, 0.1) 7.73%, rgba(89, 68, 223, 0.1) 95.41%); padding: 2px; box-shadow: 0px 1px 2px 0px #1018280D;">
                        <button :disabled="currentPage === totalPages" @click="currentPage++"
                            class="w-9 h-9 flex items-center justify-center rounded-md bg-white outline-none border-0 cursor-pointer"
                            :class="currentPage === totalPages ? 'text-gray-300' : 'text-gray-700'">
                            <Svg name="arrow-right" class="w-5 h-5"></Svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Svg from '../components/Svg.vue';
import TrendingCards from '../components/TrendingCards.vue';
import SearchHeader from '../components/SearchHeader.vue';
import FilterSection from '../components/FilterSection.vue';
import TableHeader from '../components/TableHeader.vue';
import DataTable from '../components/DataTable.vue';
import { trendingCards, filterOptions, pageSizeOptions } from '../data/trendingSearchesData.js';
import { useTableData } from '../composables/useTableData.js';
import { useFilters } from '../composables/useFilters.js';

const {
    tableData,
    filters,
    sort,
    pageSize,
    currentPage,
    selectedRows,
    headerCheckbox,
    filteredAndSortedData,
    filteredAndSortedDataRaw,
    totalPages,
    setSort,
    toggleSelectAll,
    toggleActivate,
    toggleFavourite
} = useTableData();

const {
    selectedFilters,
    addFilter,
    removeFilter,
    clearAllFilters
} = useFilters();
</script>

<style lang="css">
span.relative>span.absolute {
    content: "";
    display: block;
    pointer-events: none;
}

input[type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3e%3c/svg%3e");
    background-position: center;
    background-repeat: no-repeat;
}

input[type="checkbox"]:indeterminate {
    background-color: #C8239B;
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='8' height='8' x='4' y='4' rx='1'/%3e%3c/svg%3e");
    background-position: center;
    background-repeat: no-repeat;
}
</style>
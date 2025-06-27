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
            <TableHeader />
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
                        Showing {{ filteredAndSortedData.length }} of {{ filteredAndSortedDataRaw.length }} services.
                    </span>
                </div>
            </div>
            <div class="flex justify-center mt-4" v-if="canLoadMore">
                <button @click="loadMore" class="px-6 py-2 rounded-lg font-semibold text-white bg-premium-gradient from-premium-start to-premium-end border border-premium shadow-premium">
                    Load More
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    selectedRows,
    filteredAndSortedData,
    filteredAndSortedDataRaw,
    setSort,
    toggleSelectAll,
    toggleActivate,
    toggleFavourite,
    visibleCount,
    canLoadMore,
    loadMore
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
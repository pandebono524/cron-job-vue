<template>
    <div class="rounded-[16px] shadow w-full overflow-x-auto">
        <table class="border-separate w-full [border-spacing:0_12px]">
            <thead>
                <tr class="bg-[#4F44E6] text-white">
                    <th class="rounded-l-[5px] px-2 py-1 w-10">
                        <input ref="headerCheckboxRef" type="checkbox" @click="toggleSelectAll"
                            class="w-4 h-4 bg-white border-[1px] border-[#E2E6F3] rounded-[6px] shadow-[0_0_0_1px_#E2E6F3] appearance-none checked:bg-[#C8239B] checked:border-[2px] checked:border-white transition" />
                    </th>
                    <th
                        class="px-2 py-1.5 w-20 border border-[#FFFFFF1A] font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                        ID</th>
                    <th class="px-2 py-1.5 w-[200px] cursor-pointer border border-[#FFFFFF1A]"
                        @click="setSort('level')">
                        <div
                            class="flex items-center justify-between w-full font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                            Providers
                            <SortIcons :sort-key="'level'" :sort="sort" />
                        </div>
                    </th>
                    <th class="px-2 py-1.5 w-auto cursor-pointer border border-[#FFFFFF1A]" @click="setSort('name')">
                        <div
                            class="flex items-center justify-between w-full font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                            Name
                            <SortIcons :sort-key="'name'" :sort="sort" />
                        </div>
                    </th>
                    <th class="px-2 py-1.5 w-22 cursor-pointer border border-[#FFFFFF1A]" @click="setSort('price')">
                        <div
                            class="flex items-center justify-between w-full font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                            Price
                            <SortIcons :sort-key="'price'" :sort="sort" />
                        </div>
                    </th>
                    <th class="px-2 py-1.5 w-30 cursor-pointer border border-[#FFFFFF1A]" @click="setSort('min_max')">
                        <div
                            class="flex items-center justify-between w-full font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                            Min - Max
                            <SortIcons :sort-key="'min_max'" :sort="sort" />
                        </div>
                    </th>
                    <th class="px-2 py-1.5 w-30 cursor-pointer border border-[#FFFFFF1A]" @click="setSort('features')">
                        <div
                            class="flex items-center justify-between w-full font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                            Features
                            <SortIcons :sort-key="'features'" :sort="sort" />
                        </div>
                    </th>
                    <th class="px-2 py-1.5 w-80 rounded-r-[5px] cursor-pointer border border-[#FFFFFF1A]"
                        @click="setSort('status')">
                        <div
                            class="flex items-center justify-between w-full font-ibm font-normal text-[14px] leading-[27px] tracking-[0%]">
                            Status
                            <SortIcons :sort-key="'status'" :sort="sort" />
                        </div>
                    </th>
                </tr>
                <tr class="bg-white text-black">
                    <td class=""></td>
                    <td class="">
                        <div class="flex items-center justify-center">
                            <div class="relative rounded-[5px] w-15 mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <input v-model="filters.id"
                                    class="w-full rounded-[5px] px-2 bg-white outline-none text-[14px] border-0 pt-[3px] py-1" />
                            </div>
                        </div>
                    </td>
                    <td class="">
                        <div class="flex items-center justify-center">
                            <div class="relative rounded-[5px] w-45 mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <CustomDropdown :model-value="filters.provider" :options="[
                                    { label: 'All', value: 'all' },
                                    { label: 'Provider One', value: 'provider one' },
                                    { label: 'Provider Two', value: 'provider two' }
                                ]" @update:modelValue="val => filters.provider = val" :searchable="true" />
                            </div>
                        </div>
                    </td>
                    <td class="">
                        <div class="flex items-center justify-center w-full">
                            <div class="relative rounded-[5px] w-full mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <input v-model="filters.name"
                                    class="w-full rounded-[5px] px-2 bg-white outline-none text-[14px] border-0 pt-[3px] py-1" />
                            </div>
                        </div>
                    </td>
                    <td class="">
                        <div class="flex items-center justify-center">
                            <div class="relative rounded-[5px] w-15 mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <input v-model="filters.price"
                                    class="w-full rounded-[5px] px-2 bg-white outline-none text-[14px] border-0 pt-[3px] py-1" />
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-2">
                        <div class="flex flex-row gap-1">
                            <div class="relative rounded-[5px] w-14 mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <CustomDropdown :model-value="filters.min" :options="[
                                    { label: '1', value: '1' },
                                    { label: '5', value: '5' },
                                    { label: '10', value: '10' }
                                ]" @update:modelValue="val => filters.min = val" :searchable="false" />
                            </div>
                            <div class="relative rounded-[5px] w-14 mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <CustomDropdown :model-value="filters.max" :options="[
                                    { label: '100', value: '100' },
                                    { label: '500', value: '500' },
                                    { label: '1000', value: '1000' }
                                ]" @update:modelValue="val => filters.max = val" :searchable="false" />
                            </div>
                        </div>
                    </td>
                    <td class="">
                        <div class="flex items-center justify-center">
                            <div class="relative rounded-[5px] w-15 mt-[28px]"
                                style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                <input v-model="filters.features"
                                    class="w-full rounded-[5px] px-2 bg-white outline-none text-[14px] border-0 pt-[3px] py-1" />
                            </div>
                        </div>
                    </td>
                    <td class="">
                        <div class="flex flex-row gap-1">
                            <div class="flex flex-col gap-1">
                                <span class="font-ibm font-medium text-[10px] leading-[27px] tracking-[0%]">In
                                    Progress</span>
                                <div class="relative rounded-[5px] w-20"
                                    style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                    <CustomDropdown :model-value="filters.inProgress" :options="[
                                        { label: 'All', value: 'all' },
                                        { label: '5', value: '5' },
                                        { label: '10', value: '10' }
                                    ]" @update:modelValue="val => filters.inProgress = val" :searchable="false" />
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-ibm font-medium text-[10px] leading-[27px] tracking-[0%]">Complete</span>
                                <div class="relative rounded-[5px] w-20"
                                    style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                    <CustomDropdown :model-value="filters.complete" :options="[
                                        { label: 'All', value: 'all' },
                                        { label: '5', value: '5' },
                                        { label: '10', value: '10' }
                                    ]" @update:modelValue="val => filters.complete = val" :searchable="false" />
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-ibm font-medium text-[10px] leading-[27px] tracking-[0%]">Status</span>
                                <div class="relative rounded-[5px] w-20"
                                    style="background: linear-gradient(90deg, rgba(197, 38, 154, 0.25) 9.05%, rgba(78, 67, 229, 0.25) 94.4%); padding: 1px; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                                    <CustomDropdown :model-value="filters.status" :options="[
                                        { label: 'All', value: 'all' },
                                        { label: '5', value: '5' },
                                        { label: '10', value: '10' }
                                    ]" @update:modelValue="val => filters.status = val" :searchable="false" />
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody class="bg-[#f8f2fb] w-full">
                <tr v-for="row in tableData" :key="row.id"
                    class="bg-white shadow-[#f8f2fb_-30px_10px_60px_0px] rounded-lg">
                    <td class="px-2.5 py-6">
                        <input type="checkbox" :checked="selectedRows.includes(row.id)"
                            @change="onRowCheckboxChange($event, row.id)"
                            class="w-4 h-4 bg-white border-[1px] border-[#E2E6F3] rounded-[6px] shadow-[0_0_0_1px_#E2E6F3] appearance-none checked:bg-[#C8239B] checked:border-[2px] checked:border-white transition" />
                    </td>
                    <td class="px-2.5 py-6 text-black font-ibm">
                        <span class="pl-2.5 py-1.5 border-l border-[#0000000D]">
                            {{ row.id }}
                        </span>
                    </td>
                    <td class="px-2.5 py-6">
                        <div class="pl-2.5 flex items-center gap-2 border-l border-r border-[#0000000D]">
                            <span :style="getLevelStyle(row.level)" class="rounded-md px-2 py-0.5 text-xs font-medium">
                                {{ row.level }}
                            </span>
                            <div class="flex items-center gap-1">
                                <span class="font-ibm font-medium text-black">{{ row.provider }}</span>
                                <span class="rounded-full p-1 cursor-pointer transition" @click="toggleActivate(row)">
                                    <Svg name="activate" :active="row.activated" @click="toggleActivate(row)"
                                        class="cursor-pointer"></Svg>
                                </span>
                                <span class="rounded-full p-1 cursor-pointer transition" @click="toggleFavourite(row)">
                                    <Svg name="favourite" :active="row.favourite" @click="toggleFavourite(row)"
                                        class="cursor-pointer"></Svg>
                                </span>
                            </div>
                        </div>
                    </td>
                    <td class="px-2.5 py-6 text-black font-ibm font-normal text-[14px] leading-[16px] tracking-[0%]">
                        {{ row.name }}</td>
                    <td class="text-black font-ibm">
                        <span class="border-l border-l-[#0000000D] px-2.5 text-end py-1.5 w-full">
                            {{ row.price }}
                        </span>
                    </td>
                    <td class="text-black font-ibm ml-5">
                        <span class="border-l border-l-[#0000000D] px-2.5 text-end py-1.5 w-full">
                            {{ row.min }} - {{ row.max }}
                        </span>
                    </td>
                    <td class="">
                        <div class="flex gap-1 justify-center items-center border border-l-[#0000000D] px-2.5 py-1">
                            <img v-for="f in row.features" :key="f" :src="getFeatureImg(f)" :alt="f + ' Feature'"
                                class="h-[20px] w-auto align-middle cursor-pointer" />
                        </div>
                    </td>
                    <td class="py-6">
                        <div class="flex gap-2 border border-l-[#0000000D] px-2.5">
                            <span v-for="statusObj in Object.values(row.status)" :key="statusObj.type"
                                :class="['rounded px-2 py-0.5 min-w-20 font-ibm font-medium text-[12px] leading-[24.13px] tracking-[0.46px] text-center', getStatusClass(statusObj.type)]">
                                {{ statusObj.time }}
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Svg from './Svg.vue';
import SortIcons from './SortIcons.vue';
import CustomDropdown from './CustomDropdown.vue';
import { getFeatureImg, getStatusClass, getLevelStyle } from '../utils/tableUtils.js';

const props = defineProps({
    tableData: {
        type: Array,
        required: true
    },
    filters: {
        type: Object,
        required: true
    },
    sort: {
        type: Object,
        required: true
    },
    selectedRows: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['setSort', 'toggleSelectAll', 'toggleActivate', 'toggleFavourite', 'update:selectedRows']);

const headerCheckboxRef = ref(null);

const setSort = (key) => {
    emit('setSort', key);
};

const toggleSelectAll = () => {
    emit('toggleSelectAll');
};

const toggleActivate = (row) => {
    emit('toggleActivate', row);
};

const toggleFavourite = (row) => {
    emit('toggleFavourite', row);
};

const onRowCheckboxChange = (event, id) => {
    let newSelected = [...props.selectedRows];
    if (event.target.checked) {
        if (!newSelected.includes(id)) {
            newSelected.push(id);
        }
    } else {
        newSelected = newSelected.filter(rowId => rowId !== id);
    }
    emit('update:selectedRows', newSelected);
};

watch(() => props.selectedRows, () => {
    if (headerCheckboxRef.value) {
        const total = props.tableData.length;
        const selectedCount = props.selectedRows.length;
        headerCheckboxRef.value.checked = total > 0 && selectedCount === total;
        headerCheckboxRef.value.indeterminate = selectedCount > 0 && selectedCount < total;
    }
}, { immediate: true });
</script>
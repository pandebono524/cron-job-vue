<template>
    <div
        class="flex flex-col py-4 px-7 [background:linear-gradient(90deg,rgba(93,68,222,0.0216)_0%,rgba(201,36,156,0.0198)_100%)] rounded-lg">
        <div
            class="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-2 sm:gap-0 pb-2 sm:pb-0">
            <span
                class="font-ibm text-black font-medium text-[22px] leading-[100%] tracking-[0%] align-middle">
                Search Result
            </span>
            <div class="flex flex-row justify-center items-center gap-[10px]">
                <span class="font-ibm text-black font-normal text-[17px] leading-[27px] tracking-[0%]">
                    Show
                </span>
                <div class="relative inline-block">
                    <select :value="pageSize" @change="updatePageSize"
                        class="appearance-none bg-white text-black font-ibm font-semibold text-[17px] leading-[27px] tracking-[0%] px-4 py-[7px] rounded-[16px] shadow-[0_4px_24px_0_rgba(200,35,155,0.03)] outline-none cursor-pointer pr-10">
                        <option v-for="option in pageSizeOptions" :key="option" :value="option">{{ option }}</option>
                    </select>
                    <svg class="w-4 h-4 text-black absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <span class="font-ibm text-black font-normal text-[17px] leading-[27px] tracking-[0%]">
                    entries
                </span>
            </div>
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <span class="font-ibm text-black font-normal text-[16px] leading-[27px] tracking-[0%]">
                Showing 1 to 10 of 50,000 services.
            </span>
            <span
                class="relative w-fit font-ibm cursor-pointer font-semibold text-[16px] leading-[27px] tracking-[0%] bg-gradient-to-r from-[#C5269A] to-[#4E43E5] bg-clip-text text-transparent">
                Show 6,135 more services.
                <span
                    class="absolute left-0 right-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-[#C5269A] to-[#4E43E5]"></span>
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    pageSize: {
        type: Number,
        required: true
    },
    pageSizeOptions: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['update:pageSize']);

const updatePageSize = (event) => {
    emit('update:pageSize', Number(event.target.value));
};
</script> 
<template>
    <div class="flex flex-col gap-1 pl-[30px] pb-5 md:pb-14">
        <span class="font-ibm font-semibold text-[30px] leading-[100%] tracking-[0%] align-middle text-black">
            Search Services
        </span>
        <span class="font-ibm text-[16px] leading-[27px] tracking-[0%] align-middle text-black">
            Search Services
        </span>
    </div>
    <div class="flex flex-col md:flex-row gap-2 w-full pl-[30px] pb-5">
        <div
            class="w-full md:w-1/2 flex flex-row justify-between rounded-full pl-7 py-2 pr-3 [background:linear-gradient(90deg,rgba(200,35,155,0.05)_7.73%,rgba(89,68,223,0.05)_95.41%)] [box-shadow:15px_15px_30px_0px_#EFE3F642]">
            <input placeholder="Which service are you looking for?"
                class="w-9/10 outline-none placeholder-[#667085] text-black font-ibm font-normal text-[14px] md:text-[18px] leading-[27px] tracking-[0%]" />
            <img :src="searchButton" alt="search" class="w-auto h-auto">
        </div>
        <div class="flex flex-row gap-2">
            <div
                class="flex w-1/2 sm:w-1/3 md:w-auto cursor-pointer justify-center items-center rounded-full py-2 px-7 border border-white gap-2 [background:linear-gradient(90deg,rgba(197,38,154,0.05)_9.05%,rgba(78,67,229,0.05)_94.4%)] [box-shadow:15px_15px_30px_0px_#EFE3F642]">
                <span class="font-ibm font-semibold text-[17px] leading-[27px] tracking-[0%] text-black">
                    Exclude
                </span>
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div class="flex justify-center items-center cursor-pointer">
                <Svg name="info" class="w-auto h-auto"></Svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import Svg from './Svg.vue';
import SearchButton from '../assets/images/search_button.png';

defineProps({
    searchButton: {
        type: String,
        default: SearchButton
    }
});
</script> 
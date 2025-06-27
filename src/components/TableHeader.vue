<template>
    <div
        class="flex flex-col py-4 px-7 [background:linear-gradient(90deg,rgba(93,68,222,0.0216)_0%,rgba(201,36,156,0.0198)_100%)] rounded-lg">
        <div
            class="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-2 sm:gap-0 pb-2 sm:pb-0">
            <span class="font-ibm text-black font-medium text-[22px] leading-[100%] tracking-[0%] align-middle">
                Search Result
            </span>
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <span class="font-ibm text-black font-normal text-[16px] leading-[27px] tracking-[0%]">
                Showing 1 to 10 of 50,000 services.
            </span>
            <span
                class="relative w-fit font-ibm cursor-pointer font-semibold text-[16px] leading-[27px] tracking-[0%] bg-premium-gradient from-premium-start to-premium-end bg-clip-text text-transparent">
                Show 6,135 more services.
                <span
                    class="absolute left-0 right-0 bottom-0 h-[2px] w-full bg-premium-gradient from-premium-start to-premium-end"></span>
            </span>
        </div>
    </div>
</template>

<script setup>
</script>
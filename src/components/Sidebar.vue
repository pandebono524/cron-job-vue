<template>
    <div :class="[
        'flex flex-col border border-[#7538CD14] h-screen transition-all duration-300 relative bg-white z-[-1]',
        isCollapsed ? 'w-[60px] p-[5px]' : 'p-4 w-[260px]'
    ]">
        <div>
            <div v-if="!isCollapsed" class="flex justify-start items-center mb-2">
                <span class="font-ibm font-semibold text-[#000000] text-[18px] leading-none tracking-normal capitalize">
                    Panel Gift
                </span>
            </div>
            <div v-else class="flex justify-center items-center mb-2">
                <span
                    class="font-ibm font-semibold text-[#000000] text-[18px] leading-none tracking-normal capitalize pt-5">
                    PG
                </span>
            </div>
        </div>
        <div>
            <button v-if="!isCollapsed" @click="toggleSidebar"
                class="py-3 pl-2 rounded-l-lg absolute top-[15px] right-0 outline-none cursor-pointer"
                style="background: linear-gradient(90deg, rgba(200, 35, 155, 0.1) 7.73%, rgba(89, 68, 223, 0.1) 95.41%); border: 1px solid #EFEFEF;">
                <span>
                    <Svg name="sidebar" class="p-0"></Svg>
                </span>
            </button>
            <button v-else @click="toggleSidebar"
                class="py-3 pr-2 rounded-r-lg absolute top-[15px] right-[-20px] outline-none cursor-pointer"
                style="background: linear-gradient(90deg, rgba(200, 35, 155, 0.1) 7.73%, rgba(89, 68, 223, 0.1) 95.41%); border: 1px solid #EFEFEF;">
                <span>
                    <Svg name="sidebar" class="rotate-180"></Svg>
                </span>
            </button>
        </div>
        <div class="absolute bottom-[-300px] right-0 z-[-1]">
            <img src="../assets/images/sidebar_left.png" alt="sidebar_left" class="w-auto h-auto" />
        </div>
        <div class="absolute top-0 right-0 z-[-1]">
            <img src="../assets/images/sidebar_right.png" alt="sidebar_right" class="w-auto h-auto" />
        </div>
        <div class="flex flex-col gap-2 pt-8">
            <div v-for="item in sidebarOptions" :key="item.name" :class="[
                'flex items-center gap-1 rounded-lg cursor-pointer transition-all duration-300 min-h-[40px]',
                isCollapsed ? 'px-3 py-2 justify-center' : 'px-[10px] py-2',
                activeOption === item.name
                    ? 'bg-white shadow-[0_2px_8px_0_rgba(117,56,205,0.10)] border border-[#7538CD] text-[#7538CD] font-semibold'
                    : 'hover:bg-gray-100',
            ]" @click="setActive(item.name)">
                <Svg :name="item.icon" :active="activeOption === item.name"></Svg>
                <transition name="fade-slide">
                    <span v-if="!isCollapsed"
                        :class="activeOption === item.name ? 'font-semibold text-black text-[13px] duration-300' : 'w-max text-black font-normal text-[13px] transition-colors duration-300'">
                        {{ item.label }}
                    </span>
                </transition>
                <transition name="fade-slide">
                    <template v-if="item.chevron && !isCollapsed">
                        <ChevronDownIcon class="w-4 h-4 text-black ml-auto transition-colors duration-300" />
                    </template>
                </transition>
                <transition name="fade-slide">
                    <template v-if="item.badge && !isCollapsed">
                        <div class="bg-[#F3E8FF] rounded-full p-1 h-auto flex justify-center items-center">
                            <span
                                class="text-[#A259FF] text-[10px] font-medium bg-gradient-to-r from-[#C7249B] to-[#4742E7] bg-clip-text">{{
                                    item.badge }}</span>
                        </div>
                    </template>
                </transition>
            </div>
        </div>
        <div :class="['mt-auto mb-4 px-2', isCollapsed ? 'hidden' : '']">
            <div class="rounded-xl bg-gradient-to-br from-[#F8F4FE] to-[#EADCFF] shadow-md relative">
                <div class="flex items-center p-2.5 gap-2 mb-2">
                    <Svg name="premium" class="w-5 h-5 text-[#A259FF]"></Svg>
                    <span class="font-semibold text-[#A259FF] text-[15px]">Premium</span>
                    <button class="ml-auto text-gray-400 hover:text-gray-700 text-xs">×</button>
                </div>
                <div class="flex flex-col items-center gap-2 p-2.5 rounded-b-xl bg-white">
                    <div class="text-xs text-[#000000CC] mb-1">Active until <span class="font-bold text-black">Dec
                            19th,
                            2025</span></div>
                    <div class="w-full h-2 bg-[#E9D7FE] rounded-full overflow-hidden mb-2">
                        <div
                            class="w-2/3 h-full rounded-full [background:linear-gradient(90deg,#C8239B_7.73%,#5944DF_95.41%)]">
                        </div>
                    </div>
                    <span class="text-xs font-bold text-black">
                        243 of 913 Days Left
                    </span>
                    <button
                        class="w-full py-2 rounded-lg font-semibold text-white flex items-center justify-center gap-2 outline-none cursor-pointer"
                        style="background: linear-gradient(90deg, #C8239B 7.73%, #5944DF 95.41%); border: 1px solid #F7F7F72E; box-shadow: 15px 15px 30px 0px #EFE3F642;">
                        <Svg name="premium_upgrade" class="w-4 h-4"></Svg> Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import Svg from './Svg.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const sidebarOptions = [
    { name: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { name: 'search', label: 'Search Services', icon: 'search' },
    { name: 'lists', label: 'Lists', icon: 'lists' },
    { name: 'links', label: 'Links', icon: 'links' },
    { name: 'providers', label: 'Providers', icon: 'providers' },
    { name: 'reports', label: 'Report', icon: 'reports', chevron: true },
    { name: 'tracker', label: 'Cancellation Tracker', icon: 'tracker', badge: 'New' },
    { name: 'affiliate', label: 'Affiliate', icon: 'affiliate' },
];

const activeOption = ref(null);
const isCollapsed = ref(false);

function setActive(name) {
    activeOption.value = name;
}

function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value;
}
</script>

<style lang="css">
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
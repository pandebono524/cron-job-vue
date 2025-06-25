<template>
    <div :class="[
        'flex flex-col border border-[#7538CD14] h-screen transition-all duration-300 relative bg-white',
        isCollapsed ? 'w-[60px] p-[5px]' : 'w-[260px] p-4'
    ]">
        <div>
            <div v-if="!isCollapsed" class="flex items-center mb-6">
                <span class="font-ibm font-semibold text-black text-[18px] tracking-wide">Panel Gift</span>
            </div>
            <div v-else class="flex justify-center items-center mb-6">
                <span class="text-black font-ibm font-semibold text-[18px] tracking-wide">PG</span>
            </div>
        </div>

        <button @click="toggleSidebar" :class="[
            'absolute top-4 outline-none cursor-pointer py-2 bg-gradient-to-r from-[#C8239B1A] to-[#5944DF1A] border border-[#EFEFEF]',
            isCollapsed ? 'right-[-18px] rounded-r-lg pr-2' : 'right-0 rounded-l-lg pl-2'
        ]">
            <Svg name="sidebar" :class="isCollapsed ? 'rotate-180' : ''"></Svg>
        </button>

        <nav class="flex-1 overflow-auto pt-8">
            <ul class="space-y-1">
                <li v-for="item in sidebarOptions" :key="item.name">
                    <div class="flex items-center transition-all duration-200 rounded-lg cursor-pointer" :class="[
                        isCollapsed ? 'justify-center p-2' : 'px-3 py-2',
                        activeOption === item.name ? 'bg-white shadow-[0_2px_8px_rgba(117,56,205,0.10)] border border-[#7538CD] text-[#7538CD] font-semibold' : 'hover:bg-gray-100'
                    ]" @click="onItemClick(item)">
                        <Svg :name="item.icon" :active="activeOption === item.name"></Svg>


                        <transition name="fade-slide">
                            <span v-if="!isCollapsed" class="ml-2 text-[13px] truncate"
                                :class="activeOption === item.name ? 'font-semibold text-black' : 'font-normal text-black'">
                                {{ item.label }}
                            </span>
                        </transition>


                        <transition name="fade-slide">
                            <div v-if="item.badge && !isCollapsed" class="ml-auto">
                                <span
                                    class="inline-block bg-[#F3E8FF] text-[#A259FF] text-[10px] font-medium px-2 py-1 rounded-full">
                                    {{ item.badge }}
                                </span>
                            </div>
                        </transition>


                        <transition name="fade-slide">
                            <ChevronDownIcon v-if="item.children && !isCollapsed"
                                class="w-4 h-4 ml-auto transition-all duration-300 text-black"
                                :class="openSubmenu === item.name ? 'rotate-180' : ''" />
                        </transition>
                    </div>


                    <transition name="fade-slide">
                        <ul v-if="item.children && openSubmenu === item.name && !isCollapsed"
                            class="mt-1 ml-6 space-y-1">
                            <li v-for="sub in item.children" :key="sub.name" @click="setActive(sub.name)"
                                class="flex items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100"
                                :class="activeOption === sub.name ? 'bg-[#F8F4FE] font-semibold text-[#7538CD]' : 'text-black'">
                                <Svg :name="sub.icon" :class="'w-4 h-4'"></Svg>
                                <span class="ml-2 text-[13px] truncate">{{ sub.label }}</span>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>
        </nav>

        <div v-if="!isCollapsed" class="mt-auto mb-4 px-2">
            <div class="relative rounded-xl bg-gradient-to-br from-[#F8F4FE] to-[#EADCFF] shadow-md overflow-hidden">
                <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-700" @click="dismissPremium = true">
                    ×
                </button>
                <div v-if="!dismissPremium" class="flex flex-col">
                    <div class="flex items-center p-3 gap-2">
                        <Svg name="premium" class="w-5 h-5 text-[#A259FF]"></Svg>
                        <span class="font-semibold text-[#A259FF] text-[15px]">Premium</span>
                    </div>
                    <div class="flex flex-col items-center bg-white p-4 gap-2">
                        <div class="text-xs text-[#000000CC]">
                            Active until <span class="font-bold">Dec 19th, 2025</span>
                        </div>
                        <div class="w-full h-2 bg-[#E9D7FE] rounded-full overflow-hidden">
                            <div
                                class="h-full w-2/3 rounded-full bg-premium-gradient from-premium-start to-premium-end">
                            </div>
                        </div>
                        <span class="text-black text-xs font-bold">243 of 913 Days Left</span>
                        <button class="mt-2 w-full py-2 rounded-lg font-semibold text-white
                                        bg-premium-gradient from-premium-start to-premium-end
                                        border border-premium shadow-premium">
                            <Svg name="premium_upgrade" class="w-4 h-4 inline-block mr-1"></Svg>
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Svg from './Svg.vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const isCollapsed = ref(false)
const activeOption = ref(null)
const openSubmenu = ref(null)
const dismissPremium = ref(false)

const sidebarOptions = [
    { name: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { name: 'search', label: 'Search Services', icon: 'search' },
    { name: 'lists', label: 'Lists', icon: 'lists' },
    { name: 'links', label: 'Links', icon: 'links' },
    { name: 'providers', label: 'Providers', icon: 'providers' },
    {
        name: 'reports',
        label: 'Report',
        icon: 'reports',
        children: [
            { name: 'servicesReport', label: 'Services Report', icon: 'reports' },
            { name: 'usersReport', label: 'Users Report', icon: 'reports' },
            { name: 'providersReport', label: 'Providers Report', icon: 'reports' },
        ],
    },
    { name: 'tracker', label: 'Cancellation Tracker', icon: 'tracker', badge: 'New' },
    { name: 'affiliate', label: 'Affiliate', icon: 'affiliate' },
]

function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value
    if (isCollapsed.value) openSubmenu.value = null
}

function setActive(name) {
    activeOption.value = name
}

function onItemClick(item) {
    if (item.children) {
        openSubmenu.value = openSubmenu.value === item.name ? null : item.name
    } else {
        setActive(item.name)
        openSubmenu.value = null
    }
}
</script>

<style lang="css">
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-6px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
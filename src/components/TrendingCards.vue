<template>
    <div class="w-full flex flex-col gap-7">
        <div class="flex flex-row justify-between items-center w-full">
            <span class="font-ibm font-semibold text-[30px] leading-[100%] tracking-[0%] align-middle text-black">
                Trending Searches
            </span>
            <div class="flex flex-row items-center">
                <div ref="prevEl"
                    @click="goPrev"
                    class="flex cursor-pointer justify-center px-2 py-[10px] rounded-r rounded-lg items-center border border-[#EFEFEF] [background:linear-gradient(90deg,rgba(200,35,155,0.1)_7.73%,rgba(89,68,223,0.1)_95.41%)]">
                    <Svg name="sidebar"></Svg>
                </div>
                <div ref="nextEl"
                    @click="goNext"
                    class="flex cursor-pointer justify-center px-2 py-[10px] rounded-l rounded-lg items-center border border-[#EFEFEF] [background:linear-gradient(90deg,rgba(200,35,155,0.1)_7.73%,rgba(89,68,223,0.1)_95.41%)]">
                    <Svg name="sidebar" class="rotate-180"></Svg>
                </div>
            </div>
        </div>
        <Swiper 
            :modules="[Navigation]" 
            :slides-per-view="'auto'" 
            :space-between="14"
            :navigation="{ 
                nextEl: nextEl, 
                prevEl: prevEl 
            }" 
            class="w-full"
            @swiper="onSwiper"
        >
            <SwiperSlide v-for="card in cards" :key="card.label" class="!w-auto">
                <div class="flex flex-row bg-white rounded-lg justify-center items-center cursor-pointer">
                    <img :src="card.img" :alt="card.label" class="w-auto h-auto">
                    <span
                        class="font-ibm font-medium text-black text-[18px] leading-[100%] tracking-[0%] align-middle ml-[-25px] pr-[10px]">
                        {{ card.label }}
                    </span>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Svg from './Svg.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps({
    cards: {
        type: Array,
        required: true
    }
});

const prevEl = ref(null);
const nextEl = ref(null);
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};

const goPrev = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slidePrev();
    }
};

const goNext = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slideNext();
    }
};

onMounted(() => {
    // Ensure navigation elements are properly connected
    if (swiperInstance.value && prevEl.value && nextEl.value) {
        swiperInstance.value.navigation.init();
        swiperInstance.value.navigation.update();
    }
});
</script> 
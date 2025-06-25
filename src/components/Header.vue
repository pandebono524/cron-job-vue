<template>
  <header class="flex py-2.5 px-4 items-center justify-end bg-white w-auto">
    <div class="flex items-center gap-6">
      <div class="hidden sm:flex items-center gap-8 pr-6 border-r border-gradient">
        <button class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition" @click="$emit('upgrade')">
          <Svg name="upgrade"></Svg>
          <span
            class="font-ibm font-semibold text-sm bg-premium-gradient from-premium-start to-premium-end bg-clip-text text-transparent">
            Upgrade Now
          </span>
        </button>
        <div class="relative">
          <div class="p-px rounded-lg bg-premium-gradient from-premium-start to-premium-end">
            <div class="flex items-center gap-1 py-2.5 px-4 bg-white rounded-lg cursor-pointer">
              <Svg name="usd"></Svg>
              <span class="font-ibm font-medium text-sm text-black">USD</span>
              <Svg name="arrow-down" class="w-4 h-4 text-black"></Svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-pink-50 to-indigo-50 cursor-pointer hover:bg-gradient-to-r hover:from-pink-100 hover:to-indigo-100 transition">
          <img src="../assets/images/user.png" alt="User avatar" class="w-6 h-6" />
          <span
            class="hidden sm:flex font-ibm font-medium text-sm bg-premium-gradient from-premium-start to-premium-end bg-clip-text text-transparent">
            Ted Blue
          </span>
          <Svg name="arrow-down" class="w-4 h-4 text-black"></Svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Svg from '../components/Svg.vue';

defineEmits<{
  upgrade: []
}>()
</script>

<style scoped>
.border-gradient {
  border-image: linear-gradient(142.92deg, #C7249B 7.12%, #4742E7 78.48%) 1;
}
</style>
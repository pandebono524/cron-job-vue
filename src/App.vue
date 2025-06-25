<template>
  <div class="container mx-auto max-w-[1440px] bg-white">
    <div class="flex flex-row w-full h-full min-h-screen relative">
      <div class="fixed md:sticky top-0 h-screen z-20">
        <Sidebar />
      </div>
      <main class="flex flex-col w-full h-auto min-h-screen overflow-x-auto ml-15 md:ml-0">
        <Header></Header>
        <TrendingSearches></TrendingSearches>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import TrendingSearches from './pages/TrendingSearches.vue';
</script>
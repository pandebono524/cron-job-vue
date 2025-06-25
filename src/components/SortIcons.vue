<template>
    <span class="flex flex-col items-center justify-center w-5 h-7">
        <svg :class="['w-3 h-2', sort.key === sortKey && sort.asc ? 'text-white' : 'text-white/50']"
            fill="none" viewBox="0 0 10 6">
            <path d="M1 5L5 1L9 5" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" />
        </svg>
        <svg :class="['w-3 h-2', sort.key === sortKey && !sort.asc ? 'text-white' : 'text-white/50']"
            fill="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" />
        </svg>
    </span>
</template>

<script setup>
defineProps({
    sortKey: {
        type: String,
        required: true
    },
    sort: {
        type: Object,
        required: true
    }
});
</script> 
<template>
    <div class="relative w-full h-full" ref="dropdownRef">
        <button
            class="w-full h-full rounded-[6px] border border-gray-200 bg-white pl-1 text-left font-ibm text-[14px] leading-[27px] flex items-center justify-between shadow-sm cursor-pointer outline-none focus:ring-2 focus:ring-purple-200"
            @click="toggleDropdown" :aria-expanded="open" :aria-controls="dropdownId" type="button">
            <span class="text-purple-700">{{ selectedLabel }}</span>
            <Svg name="arrow-down" class="w-4 h-4 ml-2 transition-transform duration-200"
                :class="open ? 'rotate-180' : ''"></Svg>
        </button>
        <transition name="fade">
            <div v-if="open" :id="dropdownId"
                class="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                @keydown.down.prevent="onArrowDown" @keydown.up.prevent="onArrowUp" @keydown.enter.prevent="onEnter"
                @keydown.esc.prevent="closeDropdown" @keydown.tab="closeDropdown" tabindex="0">
                <input v-if="searchable" v-model="search" type="text"
                    class="w-full px-3 py-2 border-b border-gray-100 outline-none font-ibm text-purple-700 text-[15px]"
                    placeholder="Search..." @keydown.stop />
                <div v-for="(option, idx) in filteredOptions" :key="option.value" @click="selectOption(option)"
                    class="px-2 text-center flex items-center justify-center py-2 hover:bg-purple-50 cursor-pointer text-purple-700 text-left font-ibm text-[15px] leading-[20px]"
                    :class="{
                        'bg-purple-50': isSelected(option),
                        'bg-gray-100': highlightedIndex === idx
                    }" @mouseenter="highlightedIndex = idx" @mouseleave="highlightedIndex = -1">
                    {{ option.label }}
                </div>
                <div v-if="filteredOptions.length === 0" class="px-4 py-2 text-gray-400 font-ibm text-[15px]">No options
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import Svg from './Svg.vue';

const props = defineProps({
    modelValue: [String, Number, Object, null],
    options: {
        type: Array,
        required: true,
        // [{ label: 'All', value: 'all' }, ...]
    },
    placeholder: {
        type: String,
        default: 'Select...'
    },
    searchable: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['update:modelValue']);

const open = ref(false);
const search = ref('');
const highlightedIndex = ref(-1);
const dropdownRef = ref(null);
const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;

const filteredOptions = computed(() => {
    if (!props.searchable || !search.value) return props.options;
    return props.options.filter(opt =>
        opt.label.toLowerCase().includes(search.value.toLowerCase())
    );
});

const selectedLabel = computed(() => {
    const found = props.options.find(opt => opt.value === props.modelValue);
    return found ? found.label : props.placeholder;
});

function toggleDropdown() {
    open.value = !open.value;
    if (open.value) {
        setTimeout(() => {
            const input = dropdownRef.value?.querySelector('input');
            if (input) input.focus();
        }, 0);
    }
}

function closeDropdown() {
    open.value = false;
    highlightedIndex.value = -1;
    search.value = '';
}

function selectOption(option) {
    emit('update:modelValue', option.value);
    closeDropdown();
}

function isSelected(option) {
    return option.value === props.modelValue;
}

function onArrowDown() {
    if (highlightedIndex.value < filteredOptions.value.length - 1) {
        highlightedIndex.value++;
    }
}
function onArrowUp() {
    if (highlightedIndex.value > 0) {
        highlightedIndex.value--;
    }
}
function onEnter() {
    if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredOptions.value.length) {
        selectOption(filteredOptions.value[highlightedIndex.value]);
    }
}

function onClickOutside(event) {
    if (!dropdownRef.value?.contains(event.target)) {
        closeDropdown();
    }
}

onMounted(() => {
    document.addEventListener('mousedown', onClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener('mousedown', onClickOutside);
});

watch(open, (val) => {
    if (val) {
        highlightedIndex.value = -1;
        search.value = '';
    }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
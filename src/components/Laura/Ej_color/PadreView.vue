<script setup>
import { ref } from 'vue';
import HijoView from './HijoView.vue';

const background = ref('');
function changeColor(color) {
    background.value = color;
}

</script>

<template>
    <div class="flex flex-col items-center">
        <div :style="{ backgroundColor: background }"
            class="flex flex-col items-center pt-12 border rounded-xl mt-24 w-32 h-32">
            {{ background }}
        </div>
        <div class="mt-2">
            {{ background }}
            <HijoView @color-change="changeColor" />
        </div>
    </div>
</template>
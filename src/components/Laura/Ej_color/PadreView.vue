<script setup>
import { ref, computed, watch } from 'vue';
import HijoView from './HijoView.vue';

const background = ref('#F2C750');
const background2 = ref('#49CF3A');
const mixBackground = computed(() => {
    const rgb1 = hexToRgb(background.value);
    const rgb2 = hexToRgb(background2.value);
    return colorMixer(rgb1, rgb2, 0.5);
});

//Funcion watch para que emita el alert
watch(mixBackground, (nuevoValor) => {
    alert(`El nuevo color mezclado es: ${nuevoValor}`)
    console.log(nuevoValor)
});

//FUNCIONES PARA CONSEGUIR LAS FORMULAS PARA MEZCLAR COLORES
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function colorChannelMixer(colorChannelA, colorChannelB, amountToMix) {
    var channelA = colorChannelA * amountToMix;
    var channelB = colorChannelB * (1 - amountToMix);
    return parseInt(channelA + channelB);
}
function colorMixer(rgb1, rgb2, amountToMix) {
    var r = colorChannelMixer(rgb1[0], rgb2[0], amountToMix);
    var g = colorChannelMixer(rgb1[1], rgb2[1], amountToMix);
    var b = colorChannelMixer(rgb1[2], rgb2[2], amountToMix);
    return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeColor(color) {
    background.value = color;
}

function changeColor2(color2) {
    background2.value = color2;
}

</script>

<template>
    <div class="flex flex-col items-center">
        <div :style="{ backgroundColor: mixBackground }"
            class="flex flex-col items-center pt-12 border rounded-xl mt-24 w-32 h-32">
            {{ mixBackground }}
        </div>
        <div class="flex gap-6 mt-2">
            <HijoView :color="background" @color-change="changeColor" />
            <HijoView :color="background2" @color-change="changeColor2" />
        </div>
    </div>
</template>
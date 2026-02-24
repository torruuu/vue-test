<script setup>
import {ref} from "vue";

//Variable reactiva que recoge el INPUT con v-model y se manda al PADRE.
const inputText = ref('#ffffff');
const inputText2 = ref('#ffffff');

//EMIT - EVENTO PERSONALIZADO. CAMBIO DE COLOR. dos
const emit = defineEmits(['cambioColor']);
//FUNCION enviarOrden, es la que recoge el CLICK. Enviamos al padre el EVENTO PERSONALIZADO Y EL VALOR DEL INPUT PARA PODER CAMBIAR EL COLOR.

function enviarOrden() {
  emit ('cambioColor', inputText.value, inputText2.value);
}

</script>
<template>
<div class="flex items-center justify-center flex-col h-screen">
    <span class="space-y-10 space-x-10">
        <input :style="{backgroundColor: inputText}" class="border-4 rounded-sm p-4" type='color' v-model="inputText">
        <input :style="{backgroundColor: inputText2}" class="border-4 rounded-sm p-4" type='color' v-model="inputText2">
    </span>

    <button @click="enviarOrden" class="font-serif text-base bg-EDF2EB border-4 rounded-sm p-2">¡Pulsa para cambiar el color!</button>
  </div>
</template>
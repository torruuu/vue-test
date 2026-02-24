<script setup>
import {ref} from "vue";

const inputText = ref();
const emit = defineEmits(['cambioColor']);
function enviarOrden() {
  emit ('cambioColor', inputText.value);
}

</script>
<template>
<div class="flex items-center justify-center flex-col h-screen">
    <span>
        <input class="border-4 rounded-sm p-2" v-model="inputText" placeholder="Introduzca color de fondo">
    </span>

    <button @click="enviarOrden" class="font-serif text-base bg-EDF2EB border-4 rounded-sm p-2">¡Pulsa para cambiar el color!</button>
  </div>
</template>
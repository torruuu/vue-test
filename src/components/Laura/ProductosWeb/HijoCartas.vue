<script setup>
import { ref } from 'vue'
const props = defineProps(
    {
        id: Number,
        nombre: String,
        precio: Number
    });

// Evento personalizado para añadir productos
const emit = defineEmits(['añadir']);


function añadir() {
    emit('añadir', {
        id: props.id,
        nombre: props.nombre,
        precio: props.precio
    })
    console.log("Funciona");
}

</script>
<template>
    <div class="flex flex-col items-center max-w-40 bg-violet-100 p-12 border">
        <div>{{ nombre }}</div>
        <div>{{ precio }}</div>
        <button @click="añadir" class="bg-purple-300 p-2 border rounded-lg border-purple-800 mt-4">Añadir</button>
    </div>
</template>
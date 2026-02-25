<script setup>
import { ref } from 'vue';



const tareaBuscada = ref("");
const emit = defineEmits(['buscar-tarea'])

function buscarTarea() {
    emit('buscar-tarea', tareaBuscada.value)
}



</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl underline">To do list.</h1>
        <li>
            <input v-model="tareaBuscada" @input="buscarTarea" id="buscador" type="select"
                class="bg-gray-200 border pl-2 p-2 mt-4 rounded-l-lg" placeholder="Busca una tarea.">
            <button @click="filtradoComputed" class="bg-gray-400 p-2 px-5 border rounded-r-lg">🔍</button>
        </li>
        <span></span>
    </div>
</template>
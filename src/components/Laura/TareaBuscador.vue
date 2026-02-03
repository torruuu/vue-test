<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    tareas: Array
})

const tareaBuscada = ref("");

const filtradoComputed = computed(() => {
    //const tareaEncontrada = [""];
    if (props.value.includes(tareaBuscada.value)) {
        //tareaEncontrada.push(props);
        return props.tareas.value;
    }
    return "";
})


</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl underline">To do list.</h1>
        <li>
            <input v-model="tareaBuscada" id="buscador" type="select"
                class="bg-gray-200 border pl-2 p-2 mt-4 rounded-l-lg" placeholder="Busca una tarea.">
            <button @click="filtradoComputed" class="bg-gray-400 p-2 px-4 border rounded-r-lg">🔍</button>
        </li>
        <span></span>
    </div>
</template>
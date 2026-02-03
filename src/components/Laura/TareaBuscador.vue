<script setup>
import { ref } from 'vue';

const props = defineProps({        // Meto los props en una variable para poder acceder a su contenido en las funciones
    id: Number,
    nombre: String,
    estado: Boolean
})

const tareaBuscada = ref("");

//Funcion que se ejecuta al capturar el evento submit
function buscarTarea() {
    if (tareaBuscada.value.trim() === props.nombre.value.trim()) {
        return props.nombre.value;
    }
}


</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl underline">To do list.</h1>
        <li>
            <input v-model="tareaBuscada" id="buscador" type="select"
                class="bg-gray-200 border pl-2 p-2 mt-4 rounded-l-lg" placeholder="Busca una tarea.">
            <button @click="buscarTarea" class="bg-gray-400 p-2 px-4 border rounded-r-lg">🔍</button>
        </li>
    </div>
</template>
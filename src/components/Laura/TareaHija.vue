<script setup>
import { ref } from 'vue'

//Defino el evento que se emitira al padre
const emit = defineEmits(['agregarTarea'])

//Variable reactiva para capturar el valor del input
const nuevaTarea = ref('')

//Funcion que se ejecuta al capturar el evento submit
function agregarTarea() {
    if (nuevaTarea.value.trim() !== '') {  // Si no esta vacio emite el evento al padre con el valor del input
        emit('agregarTarea', nuevaTarea.value)
        nuevaTarea.value = ''  // Y luego limpia el input
    }
}

</script>

<template>
    <div class="flex flex-col items-center">
        <form @submit.prevent="agregarTarea" class="flex justify-center">
            <input v-model="nuevaTarea" id="entrada" class="bg-amber-200 border pl-2 rounded-l-lg"
                placeholder="Añade una tarea.">
            <button class="bg-amber-400 p-2 border rounded-r-lg">Agregar</button>
        </form>
    </div>
</template>
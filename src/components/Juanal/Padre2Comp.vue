<script setup>
import { ref } from "vue"
import Hijo2Comp from "./Hijo2Comp.vue";
import AddTask from "./AddTask.vue"
import searchTask from "./searchTask.vue";

const tareas = ref([
    { id: 1, title: "Comer", done: true },
    { id: 2, title: "Dormir", done: false },
    { id: 3, title: "Estudiar", done: true }
])
// Funcion que elimina tarea del array Tareas.
function eliminarTarea(id) {
    tareas.value = tareas.value.filter(tarea => tarea.id !== id);
}

function enviar(id) {
    const tarea = tareas.value.find(t => t.id === id)
    if (!tarea) return
    tarea.done = !tarea.done

}
function add(title) {
    tareas.value.push({
        id: Date.now(),
        title,
        done: false
    })
}



</script>

<template>
    <div class="flex flex-col min-h-screen gap-6 p-6">
        <h1>Barra de búsqueda</h1>
            <searchTask />
        <h1>Añade nueva tarea:</h1>

        <AddTask @add-tarea="add" />

        <h1>Tareas pendientes</h1>

        <div v-for="tarea in tareas" :key="tarea.id">
            <Hijo2Comp v-if="!tarea.done" :id="tarea.id" :title="tarea.title" :done="tarea.done" @enviar="enviar"
                @borrar="eliminarTarea" />
        </div>
        <h1>Tareas completadas</h1>
        <div v-for="tarea in tareas" :key="tarea.id">
            <Hijo2Comp v-if="tarea.done" :id="tarea.id" :title="tarea.title" :done="tarea.done"
                @borrar="eliminarTarea" />
        </div>
    </div>
</template>
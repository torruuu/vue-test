<script setup>
import TareaHijo from "./TareaHijo.vue"
import TareaHija from "./TareaHija.vue"
import { ref } from "vue"

const tareas = ref([
    { id: 1, nombre: "Lavar los platos", estado: false },
    { id: 2, nombre: "Terminar los ejercicios de Vue", estado: false },
    { id: 3, nombre: "Hacer la compra", estado: false },
])

//Declaro la funcion borrar tarea
function eliminarTarea(id) {
    tareas.value = tareas.value.filter(tarea => tarea.id !== id)
}
//Declaro la funcion agregar tarea que añade el valor del input en el array
function agregarTarea(nombreTarea) {
    tareas.value.push({
        id: tareas.value.length + 1,
        nombre: nombreTarea,
        estado: false
    })
}
//Declaro la funcion marcar que escucha el evento personalizado
function marcar(id) {
    // Buscar en el array la tarea que tenga el mismo id
    const tarea = tareas.value.find((t) => t.id === id)
    // Si encontró la tarea, invertir su estado (true ↔ false)
    if (tarea) {
        tarea.estado = !tarea.estado
        if (tarea.estado === false) {
            console.log("Pendiente")
        } else {
            console.log("Completada")
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-center gap-4 mt-22">
        <TareaHija @agregar-tarea="agregarTarea" />
        <h1 class="mb-20 mt-6 text-xl underline">Lista de tareas:</h1>
        <ul v-for="tarea in tareas" :key="tarea.id">
            <TareaHijo v-if="!tarea.estado" :id="tarea.id" :nombre="tarea.nombre" :estado="tarea.estado" @marcar="marcar"
                @borrado="eliminarTarea" />
        </ul>
        <h2 class="mt-6 text-xl underline">Tareas completadas:</h2>
        <ul v-for="tarea in tareas" :key="tarea.id">
            <TareaHijo v-if="tarea.estado" :id="tarea.id" :nombre="tarea.nombre" :estado="tarea.estado"
                @borrado="eliminarTarea" />
        </ul>
    </div>
</template>

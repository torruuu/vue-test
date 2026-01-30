<script setup>
import TareaHijo from "./TareaHijo.vue"
import { ref } from "vue"

const tareas = ref([
  { id: 1, nombre: "Lavar los platos", estado: false },
  { id: 2, nombre: "Terminar los ejercicios de Vue", estado: false },
  { id: 3, nombre: "Hacer la compra", estado: false },
])

function marcar(id) {
  // Buscar en el array la tarea que tenga el mismo id
  const tarea = tareas.value.find((t) => t.id === id)

  // Si encontró la tarea, invertir su estado (true ↔ false)
  if (tarea) {
    tarea.estado = !tarea.estado
    if (tarea.estado === false) {
      console.log("Completada")
    } else {
      console.log("Pendiente")
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-32">
    <h1 class="mb-20 text-2xl underline">Lista de tareas:</h1>
    <ul v-for="tarea in tareas" :key="tarea.id">
      <TareaHijo
        :id="tarea.id"
        :nombre="tarea.nombre"
        :estado="tarea.estado"
        @marcar="marcar"
      />
    </ul>
    <h2>Tareas completadas:</h2>
    <ul v-for="tarea in tareas" :key="tarea.id">
      <span v-if="tarea.estado">{{ tarea.nombre }}</span>
    </ul>
  </div>
</template>

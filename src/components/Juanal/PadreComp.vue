<script setup>
import { ref } from "vue"
import HijoComp from "./HijoComp.vue"
import AddTask from "./AddTask.vue"



const tareas = ref([
  { id: 1, title: "Comer", done: true },
  { id: 2, title: "Dormir", done: false },
])

const tareasPendientes = ref([])
const tareasTerminadas = ref([])

function recalcularListas() {
  tareasPendientes.value = []
  tareasTerminadas.value = []

  tareas.value.forEach(tarea => {
    if (tarea.done) {
      tareasTerminadas.value.push(tarea)
    } else {
      tareasPendientes.value.push(tarea)
    }
  })
}

recalcularListas()

function enviar(id) {
  const tarea = tareas.value.find(t => t.id === id)
  if (!tarea) return

  tarea.done = !tarea.done
  recalcularListas()
}
function add (title) {
  tareas.value.push({
    id: Date.now(),
    title,
    done: false
  })
 recalcularListas()
}
</script>

<template>
  <div class="flex flex-col min-h-screen gap-6 p-6">
    <h1>Añade nueva tarea:</h1>

    <AddTask @add-tarea="add" />

    <h1>Tareas completadas</h1>
    <HijoComp
      v-for="tarea in tareasTerminadas"
      :key="tarea.id"
      :id="tarea.id"
      :title="tarea.title"
      :done="tarea.done"
      @enviar="enviar"
    />

    <h1>Tareas pendientes</h1>
    <HijoComp
      v-for="tarea in tareasPendientes"
      :key="tarea.id"
      :id="tarea.id"
      :title="tarea.title"
      :done="tarea.done"
      @enviar="enviar"
    />
  </div>
</template>
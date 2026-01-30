<script setup>
import { ref } from "vue"
import HijoComp from "./HijoComp.vue"

const tareas = ref([
  { id: 1, title: "Comer", done: true },
  { id: 2, title: "Dormir", done: false },
])
</script>

<template>
  <div>
    <h1>Tareas completadas.</h1>
    <div v-for="tarea of tareas" :key="tarea.id">
      <HijoComp
        v-if="tarea.done"
        :title="tarea.title"
        :done="tarea.done"
      />
    </div>

    <h1>Tareas pendientes.</h1>
    <div v-for="tarea of tareas" :key="tarea.id">
      <HijoComp
        v-if="!tarea.done"
        :title="tarea.title"
        :done="tarea.done"
      />
    </div>
  </div>
</template>

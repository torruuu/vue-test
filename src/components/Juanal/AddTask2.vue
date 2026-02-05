<script setup>
import {ref} from "vue";

const inputText = ref("");

const emit = defineEmits(['addTarea']);
function enviarTarea() {
  if (!inputText.value.trim()) return

  emit('addTarea', inputText.value)
  inputText.value = ""
}

</script>
<template>
    <div>
        <input v-model="inputText" placeholder="Introduzca una nueva tarea" class="bg-yellow-50 border-4 rounded-sm p-2">
        <button @click="enviarTarea" class="bg-green-50  border-4 rounded-sm p-2">Add</button>
    </div>



</template>
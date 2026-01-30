<script setup>
defineProps({
  id: Number,
  title: String,
  done: Boolean,
})
</script>
<template>
  <div>
    <span>{{ title }}</span>
    <button v-if="done" class="font-serif text-base bg-green-400 rounded-xl">AÑADIR</button>
    <button class="font-serif text-base bg-red-400 rounded-xl">ELIMINAR</button>
  </div>
</template>

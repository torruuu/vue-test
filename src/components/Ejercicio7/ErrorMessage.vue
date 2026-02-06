<script setup>
import { onUnmounted } from 'vue';

const props = defineProps({
  message: String
})

onUnmounted(() => {
  console.log(`Desmontando ${props.message}`)
})
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>
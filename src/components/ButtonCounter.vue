<script setup>
import { ref } from 'vue';

/**
 * test comment
 */

let count = ref(0)

const handleClick = () => {
  console.log('Button clicked');
  count.value = count.value + 1;
}
</script>

<template>
  <div class="text-2xl font-bold">{{ count }}</div>
  <button class="bg-gray-500 text-white p-2 rounded-md cursor-pointer" @click="handleClick">
    Click ++
  </button>
</template>

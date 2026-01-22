<script setup>
import { ref } from 'vue';

let count = ref(0)
const inputText = ref('')

const handleClick = (event) => {
  event.stopPropagation()
  count.value++;
}
const handleClick2 = () => {
  count.value--;
}
const handleInput = (event) => {
  inputText.value = event.target.value
}

</script>

<template>
  <div class="text-2xl font-bold">{{ count }}</div>
  <span v-if="count >= 5">Has llegado a 5</span>
  <span v-else-if="count === 3">Estas en 3</span>
  <br>
  <div @click="console.log('click desde el padre')">
    <button class="bg-gray-500 text-white p-2 rounded-md cursor-pointer" @click.stop="handleClick">
      Click ++
    </button>
    <button class="bg-gray-500 text-white p-2 rounded-md cursor-pointer" @click="handleClick2">
      Click --
    </button>
  </div>
  <br>
  <span >{{ inputText }}</span>
  <br>

  <form @submit.prevent="console.log('He hecho un submit')">
    <input @input="handleInput" class="bg-gray-200" type="text">
    <button class="bg-gray-500 text-white p-2 rounded-md cursor-pointer">
      Enviar
    </button>
  </form>
</template>

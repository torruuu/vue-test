<script setup>
import { ref } from 'vue';

defineProps({
  color: {
    type: String,
    required: true,
    default: 'gray'
  }
})

let count = ref(0)
const inputText = ref('')
const textarea = ref('')

const handleClick = (event) => {
  event.stopPropagation()
  count.value++;
}
const handleClick2 = () => {
  count.value--;
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
  <span>{{ color }}</span>
  <span>{{ inputText }}</span>
  <br>

  <form @submit.prevent="console.log('He hecho un submit')">
    <input v-model="inputText" class="bg-gray-200" type="text">
    <textarea v-model="textarea" class="bg-gray-200"></textarea>
    <span>{{ textarea }}</span>
    <button class="bg-gray-500 text-white p-2 rounded-md cursor-pointer">
      Enviar
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';


const inputText = ref("");
const error = 'Error'

function handleSubmit(){
  return inputText.value.length <= 8 ? alert("Submit") : alert('Error')
}


</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input class="border-black bg-red-500" v-model="inputText"  type="text">
    <span v-if="inputText.length>8"> {{ error}}</span>
    <button>Enviar</button>
    
  </form>
</template>
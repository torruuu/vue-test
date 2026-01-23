<script setup>

  import FormHijo from "./FormHijo.vue"
  import { ref } from "vue";
  
  const inputText= ref('');

  function FormHijoo({ input }) {
    console.log(input)
  }

  FormHijoo({ input: 'aaa' })


</script>

<template>

  <div>
    <input v-model="inputText" class="border-2 bg-amber-300">
    
  </div>

  <FormHijo :input="inputText" />


</template>
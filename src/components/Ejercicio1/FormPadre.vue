<script setup>

  import FormHijo from "./FormHijo.vue"
  import { ref } from "vue";
  
  const inputText= ref('');

  function FormHijoo({ input }) {
    console.log(input)
  }

  FormHijoo({ input: 'aaa' })

  function handleClick() {
    inputText.value= "";
  }


</script>

<template>

  <div>
    <input @click.stop v-model="inputText" class="border-2 bg-amber-300">
    
    <FormHijo :clear-input="handleClick" :input="inputText"/>
  </div>
  


</template>
<script setup>
// import Button from './components/ButtonCounter.vue';
import Header from './components/MainHeader.vue';
import InputValidator from './components/InputValidator.vue';
import BoxGrid from './components/BoxGrid.vue';
import FormPadre from './components/Ejercicio1/FormPadre.vue';



</script>

<template>
  <Header />
  <!-- <Button color="aaaaaaaaaaaaaaaa" /> -->
  <InputValidator />
  <BoxGrid/>
  <FormPadre @click="() => console.log('Ha llegado a App')" />
  
</template>

<style scoped>
  
</style>

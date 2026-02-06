<script setup>
import { ref } from 'vue';
import TempConverter from './TempConverter.vue';
import ErrorMessage from './ErrorMessage.vue';

const isErrors = ref(false)

function errores(isError) {
  if(isError === true){
    isErrors.value = true;
  }
  else {
    isErrors.value = false;
  }
}
</script>
<template>
  <div>
    <TempConverter @validacion="errores" />
    <ErrorMessage v-if="isErrors" message="Hay errores" />
    <ErrorMessage v-else message="No hay errores" />


  </div>


</template>
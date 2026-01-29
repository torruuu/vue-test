<script setup>
import MainForm from './MainForm.vue';
  
function handleSubmitLogin(values) {
  console.log(values)
}


</script>
<template>
  <div>
    <MainForm @enviar="handleSubmitLogin" />
  </div>


</template>
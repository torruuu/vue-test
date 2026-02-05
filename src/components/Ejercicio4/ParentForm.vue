<script setup>
import MainForm from './MainForm.vue';
  
function handleSubmitLogin(valores) {
  console.log(valores)
}
function handleBorrar() {
  console.log("Formulario reiniciado")
}

</script>
<template>
  <div>
    <MainForm @enviar="handleSubmitLogin" @borrar="handleBorrar" />
  </div>


</template>
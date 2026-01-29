<script setup>
const emit = defineEmits(['enviar', 'borrar'])

function mensaje () {
  const values = {
    email: 'test@gmail.com',
    password: '123'
  }
  const url = 'google.com'
  emit('enviar', {
    values,
    url
  })
};



</script>
<template>
  <div>
    <form @submit.prevent="mensaje">
      <button id="btn" class="bg-red-400 border">Enviar</button>
    </form>
  </div> 
</template>
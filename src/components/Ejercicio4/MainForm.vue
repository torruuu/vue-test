<script setup>
import { ref } from 'vue';
const emit = defineEmits(['enviar', 'borrar']);


function mensaje() {
console.log(`${inputText.value} ${inputPassword.value}`)
const valores ={
  usuario: inputText.value,
  password: inputPassword.value
}
emit("enviar", valores)
}
function clean(){
  inputText.value="";
  inputPassword.value="";
  emit('borrar')
}


const inputText = ref("");
const inputPassword = ref("");

</script>
<template>
  <div>
    <form @submit.prevent="mensaje">
      <label for="user">Usuario: </label>
      <input v-model="inputText" id="user" name="user" type="text" class="bg-cyan-200 border-2" />

      <label for="password">Contraseña: </label>
      <input v-model="inputPassword"
        id="password"
        name="password"
        type="password"
        class="bg-cyan-200 border-2"
      />

      <button id="btn" class="bg-red-400 border-2 p-1">Enviar</button>
      <button @click="clean" type="button" class="bg-purple-400 border-2 p-1">Eliminar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const inputText1 = ref("")
const inputText2 = ref("")

const mostrarMensajeComputed = computed(mostrarMensaje);

function mostrarMensaje(){
  const mensaje = `${inputText1.value} ${inputText2.value}`;
  return mensaje
}

</script>

<template>
  <div>
    <div>
      <input v-model="inputText1" id="input1" class="bg-gray-300"/>
      <input v-model="inputText2" id="input2" class="bg-gray-300" />
    </div>
    <span>{{ mostrarMensajeComputed }}</span>
  </div>
</template>

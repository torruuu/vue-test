<script setup>
import { computed, ref } from "vue";

let contador = ref(0);

function sumar () {
  contador.value++;
}
function restar () {
  contador.value--;
}

// const mensaje = ref("");

// function addMensaje () {
//   if (contador.value >= 0){
//     mensaje.value = "El número es positivo";
//   }
//   else { mensaje.value = "El número es negativo";}
// }

const mensajeComputed = computed(() => {
  console.log('Renderizando...')
  if(contador.value===0) {
    return "El valor es exactamente cero.";
  }
  else if (contador.value>0) {
    return "El número es positivo."
  }
  else {
    return "El número es negativo."
  }
});


const sumaComputed = computed(() => {
  const result = contador.value + 1;
  return result;
})







</script>
<template>
  <div class="flex flex-col items-center">
    <div class="flex">

      <button @click="restar" class="bg-red-400 rounded p-2">Restar</button>
      <span class="bg-cyan-400 rounded p-2">
        {{ contador }}
      </span>
      <button @click="sumar" class="bg-green-400 rounded p-2 ">Sumar</button>
        
    </div>
    <span class="w-60 bg-gray-400 text-center border rounded p-2">
    {{ mensajeComputed }}
    </span>
    <span>{{ sumaComputed }}</span>
  </div>
</template>
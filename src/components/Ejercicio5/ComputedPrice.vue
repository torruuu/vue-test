<script setup>
import {ref, computed} from "vue";

const inputPrecio = ref(0);
const inputDescuento = ref(0);

const precioFinal = computed(() => {
  if (typeof inputPrecio.value !=='number' || typeof inputDescuento.value !== 'number') {
    return 0
  }
  
  const descuento = (inputPrecio.value*inputDescuento.value)/100;
  const resultado = (inputPrecio.value - descuento);
  return resultado;
});


</script>
<template>
  <div>
    <form>
    <label for="precio">Precio:</label>
    <input v-model="inputPrecio" type="number" id="precio" class="bg-gray-400 rounded p-2">
    <label for="descuento">Descuento:</label>
    <input v-model="inputDescuento" type="number" id="descuento" class="bg-gray-400 rounded p-2">
    <span>Total:{{ precioFinal }}</span>
  
  

  </form>
  </div>



</template>
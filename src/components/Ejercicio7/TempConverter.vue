<script setup>
import {computed, ref, watch, watchEffect} from "vue";

const inputTemp =ref();

const fahrenheitTemp = computed(() => {
  let resultado=0;
  
    resultado = (inputTemp.value * 9/5) + 32;
    return resultado;
  
})

const errorFormato = computed(() => {
  let mensaje= "";
  if(inputTemp.value === undefined){
    return mensaje="";
  }
  const input = Number(inputTemp.value)
  if(typeof input !== "number" || isNaN(input) === true) {
    mensaje = "Error, formato no valido."
  }
  return mensaje
})

const lengthError = computed(() => {
  let mensaje = "";
  if(inputTemp.value?.length > 3) {
    mensaje = "Error de longitud";
    return mensaje;
  }
  return mensaje
})

function pintarSiHayErrores () {
  if(errorFormato.value.length > 0 || lengthError.value.length > 0) {
    console.log ("Errores.")
  }
}

watch((inputTemp), (newValue, oldValue) => {
  console.log(oldValue)
  console.log(newValue)
  pintarSiHayErrores()
 })
watchEffect(() => {
  console.log('gg')
  if(errorFormato.value.length > 0 || lengthError.value.length > 0) {
    console.log ("Errores.")
  }
})

</script>
<template>
  <div>
    <h1> Conversor de Temperatura.</h1>
    <input v-model="inputTemp" id="tempGrados" class="bg-violet-400 rounded p-2">
    <span>ºC</span>
    <span v-if="typeof fahrenheitTemp === 'number' && isNaN(fahrenheitTemp) !== true" id="resultadoCambio">{{ fahrenheitTemp }}</span>
    <span>{{ errorFormato }}</span>
    <span>{{ lengthError }}</span>
    
  </div>


</template>
<script setup>
import {ref} from "vue";
const props = defineProps(['colorInicial']);

//Variable reactiva que recoge el INPUT con v-model y se manda al PADRE.
const inputText = ref(props.colorInicial ?? '#ffffff');


//EMIT - EVENTO PERSONALIZADO. CAMBIO DE COLOR. dos
const emit = defineEmits(['cambioColor']);
//FUNCION enviarOrden, es la que recoge el CLICK. Enviamos al padre el EVENTO PERSONALIZADO Y EL VALOR DEL INPUT PARA PODER CAMBIAR EL COLOR.

function enviarOrden(e) {
    inputText.value = e.target.value;
  emit ('cambioColor', inputText.value);
}

//EL INPUT TEXT DE ABAJO LO PINTA, LO QUE QUIERO ES QUE SE REFLEJE EN OTRO INPUT CAPTURANDO ESE COLOR QUE ELEGIMOS Y QUE VAYAN CAMBIANDO AL TIEMPO.
</script>
<template>
<div class="flex items-center justify-center flex-col">
    <span class="flex flex-col items-center gap-4 p-">
    
        <input class="border-4 rounded-sm p-4" type='color' @input="enviarOrden" :value="inputText">
        <input class="border-4 rounded-sm p-4" type='text' v-model="inputText" @input="enviarOrden">

    </span>
  </div>
</template>
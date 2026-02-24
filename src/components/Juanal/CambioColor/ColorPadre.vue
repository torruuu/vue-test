<script setup>
import {ref} from "vue";
import ColorHijo from "./ColorHijo.vue";
//VARIABLE COLOR FONDO, REACTIVA.
const colorBase = ref('#ebd234')
const colorFondo = ref(colorBase.value);
//FUNCION CAMBIAR COLOR, RECIBE EL VALOR DEL HIJO (INPUTTEXT) Y CAMBIAMOS EL COLOR POR EL VALOR DEL INPUT TEXT

function cambiarColor (colorMezclado) {
    colorFondo.value=colorMezclado;
    
}

</script>
<template>
<!--_STYLE PARA QUE CAMBIE COLOR SEGÚN LO QUE MARCAMOS. EL HIJO RECIBE LA FUNCION CAMBIO DE COLOR Y EJECUTA LA QUE HEMOS DECLARADO AQUI.--> 
    <div :style="{backgroundColor: colorFondo}">
    <ColorHijo :color-base="colorBase" @cambioColor="cambiarColor"/>

  </div>
</template>
<script setup>
import {ref, computed} from "vue";
import ColorHijo from "./ColorHijo.vue";
//VARIABLE COLOR FONDO, REACTIVA.
const color1 = ref('#ffffff');
const color2 = ref('#ffffff');
//FUNCION CAMBIAR COLOR, RECIBE EL VALOR DEL HIJO (INPUTTEXT) Y CAMBIAMOS EL COLOR POR EL VALOR DEL INPUT TEXT
function cambiarColor (inputText, inputText2) {
    color1.value = inputText;
    color2.value = inputText2;}

const colorMezclado = computed(() => {
  const parse = (hex) => {
    const h = hex.replace('#', '');
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16),
    };
  };

  const c1 = parse(color1.value);
  const c2 = parse(color2.value);

  const r = Math.round((c1.r + c2.r) / 2).toString(16).padStart(2, '0');
  const g = Math.round((c1.g + c2.g) / 2).toString(16).padStart(2, '0');
  const b = Math.round((c1.b + c2.b) / 2).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}); 


</script>
<template>
<!--_STYLE PARA QUE CAMBIE COLOR SEGÚN LO QUE MARCAMOS. EL HIJO RECIBE LA FUNCION CAMBIO DE COLOR Y EJECUTA LA QUE HEMOS DECLARADO AQUI.--> 
    <div :style="{backgroundColor: colorMezclado}">
    <ColorHijo @cambioColor="cambiarColor"/>
    


  </div>
</template>
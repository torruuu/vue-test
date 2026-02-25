<script setup>
import {ref, computed, watch} from "vue";
import ColorHijo from "./ColorHijo.vue";
//VARIABLE COLOR FONDO, REACTIVA.
const color1 = ref('#ff0000');
const color2 = ref('#0000ff');
//FUNCION CAMBIAR COLOR, RECIBE EL VALOR DEL HIJO (INPUTTEXT) Y CAMBIAMOS EL COLOR POR EL VALOR DEL INPUT TEXT
function cambiarColor1 (inputText) {
    color1.value = inputText;}
function cambiarColor2 (inputText) {
    color2.value = inputText;}

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
watch (colorMezclado, () => {
    alert ('¡Ha cambiado la mezcla!')
})

</script>
<template>
  <div :style="{backgroundColor: colorMezclado}" class="min-h-screen flex flex-col items-center justify-center gap-8">
    <div class="flex gap-16">
      <span class="font-sans text-lg flex">¡Elige tus colores para el cambio!</span>
      <ColorHijo @cambioColor="cambiarColor1" colorInicial="#ff0000"/>
      <ColorHijo @cambioColor="cambiarColor2" colorInicial="#0000ff"/>
    </div>
  </div>
</template>
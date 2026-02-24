<script setup>
import {ref, computed} from "vue";

const props = defineProps({
    colorBase: String
 })

//Variable reactiva que recoge el INPUT con v-model y se manda al PADRE.
const inputText = ref();
const inputText2 = ref();
const colorMezclado = computed(() => {
  const parse = (hex) => {
    const h = hex.replace('#', '');
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16),
    };
  };
  const c1 = parse(inputText.value);
  const c2 = parse(inputText2.value);
  const r = Math.round((c1.r + c2.r) / 2).toString(16).padStart(2, '0');
  const g = Math.round((c1.g + c2.g) / 2).toString(16).padStart(2, '0');
  const b = Math.round((c1.b + c2.b) / 2).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
});
//EMIT - EVENTO PERSONALIZADO. CAMBIO DE COLOR.
const emit = defineEmits(['cambioColor']);
//FUNCION enviarOrden, es la que recoge el CLICK. Enviamos al padre el EVENTO PERSONALIZADO Y EL VALOR DEL INPUT PARA PODER CAMBIAR EL COLOR.

function enviarOrden() {
  emit ('cambioColor', colorMezclado.value, props.colorBase);
}

</script>
<template>
<div class="flex items-center justify-center flex-col h-screen">
    <span class="space-y-10 space-x-10">
        <input :style="{backgroundColor: inputText}" class="border-4 rounded-sm p-4" type='color' v-model="inputText">
        <input :style="{backgroundColor: inputText2}" class="border-4 rounded-sm p-4" type='color' v-model="inputText2">
    </span>

    <button @click="enviarOrden" class="font-serif text-base bg-EDF2EB border-4 rounded-sm p-2">¡Pulsa para cambiar el color!</button>
  </div>
</template>
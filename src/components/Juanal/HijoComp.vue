<script setup>
const props = defineProps({
  id: Number,
  title: String,
  done: Boolean,
})

const emit = defineEmits(['enviar']);
function enviado() {
  emit ('enviar', props.id);
}



</script>
<template>
  <div class="justify-between">
    <span class="items-center border-4 rounded-sm p-2">{{ title }}</span>
    <button @click="enviado" class="font-serif text-base bg-cyan-300 border-4 rounded-sm p-2">Accionar</button>
  </div>
</template>

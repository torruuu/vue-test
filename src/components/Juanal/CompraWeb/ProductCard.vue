<script setup>
const props = defineProps ({
id: Number,
name : String,
price: Number,
imagen: String
})

const emit = defineEmits(['addProduct']);

function enviarProducto () {
  emit('addProduct', props.id)
  console.log("emit enviado")
}


  



</script>
<template>
    <div class="flex items-center justify-center">
<div class="flex flex-col p-5 border-black border-4 rounded h-64 items-center justify-between">
    <div>{{ name }}</div>
    <div>{{ price }} €</div>
    <img :src="imagen" :alt="`imagen ${name}`" class="w-15">
    <button @click="enviarProducto" class="bg-cyan-200 border rounded p-2">Add</button>
</div>
</div>



</template>
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
<div class="flex flex-col bg-grey-700 p-5 border-black border rounded gap-4 text-center items-center">
    <div>{{ name }}</div>
    <div>{{ price }} €</div>
    <div></div>
    <button @click="enviarProducto" class="bg-cyan-200 border rounded p-2">Add</button>
</div>
</div>



</template>
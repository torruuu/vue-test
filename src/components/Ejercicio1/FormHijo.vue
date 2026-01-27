<script setup>

defineProps({
  input: String,
  clearInput: { type: Function, required: true }
})

// const boton = document.querySelector('button');
// boton.addEventListener("click", handleClick)

</script>

<template>
  <div id="22" class="aa">
    
    <span>
      {{ input }} 
    </span>

    <button @click="clearInput" class="bg-gray-300 border">Borrar</button>
  </div>
  

</template>
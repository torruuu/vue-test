<script setup>

defineProps({
  input: String
})

const boton = document.querySelector('button');

const handleClick = (event) => {
  console.log(event)
}
boton.addEventListener("click", handleClick)

</script>

<template>
  <div id="22" class="aa">
    
    <span>
      {{ input }} 
    </span>

    <button class="bg-gray-300 border" @click="handleClick">Borrar</button>
  </div>
  

</template>
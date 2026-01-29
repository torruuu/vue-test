<script setup>
 const props = defineProps({
  name: String,
  color: String,
  id: Number,
  role: String
})

const datos = (`${props.color} - ${props.name} - ${props.id} `);
function mensaje () {
  alert(`El color es: ${props.color}`)

};




</script>
<template>
  <div :id="name">
    {{ datos }}
    <button v-if="role === 'admin'" @click="mensaje" id="btn" class="bg-red-400 border border-red-900 p-1">Pintar</button>
  </div>



</template>
<script setup>
 const props = defineProps({
  name: String,
  color: String,
  id: Number
})

const datos = (`${props.color} - ${props.name} - ${props.id} `);





</script>
<template>
  <div :id="name">
    {{ datos }}
  </div>



</template>
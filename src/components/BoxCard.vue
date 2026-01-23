<script setup>
defineProps ({
title : String,
color: String
})

</script>
<template>
  <div :class="`bg-${color}-400 p-5 border border-black border-dashed`" >{{ title }}</div>


</template>
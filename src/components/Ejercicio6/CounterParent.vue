<script setup>
import { ref } from 'vue';
import CounterLimit from './CounterLimit.vue';


const mensajito = ref("");

function mensajeLimitao () {
  mensajito.value = "Has llegado al limite"
  setTimeout(() => {
    alert('Has llegado al limite')
  }, 500)
}



</script>
<template>
  <CounterLimit :limit="3" @limitao="mensajeLimitao"/>
  <span>{{ mensajito }}</span>




</template>
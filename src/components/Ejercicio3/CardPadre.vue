<script setup>
import CardHijo from './CardHijo.vue';
const cartas = [
  {
    id: 1,
    name: "Juan",
    color: "Azul"
  },
  {
    id: 2,
    name: "Laura",
    color: "Morado"
  },
  {
    id: 3,
    name: "Alejandro",
    color: "Negro"
  }
];

</script>
<template>
  <CardHijo v-for="carta in cartas" :key="carta.id" :id="carta.id" :name="carta.name" :color="carta.color" />
  





  
</template>
<script setup>
import BoxCard from './BoxCard.vue';
const cartas = [
  {title:"Coche", color:"blue", id: 1},
  {title:"Camion", color:"cyan", id: 2},
  {title:"Avion", color:"cyan", id: 3},
  {title:"Tren", color:"cyan", id: 4},
  {title:"Moto", color:"cyan", id: 5},
  {title:"Barco", color:"cyan", id: 6}
]

const letras = ['a', 'b', 'c'] 

// const items = []

for(let i = 0; i<cartas.length; i++){
  console.log(cartas[i].title);
}

for (let i in cartas) {
  console.log(cartas[i].title);
}

for (let letra of letras) {
  console.log(letra)
}

cartas.map((value) => {
  console.log(value.title)
})

</script>
<template>
  <div class="flex gap-2">
  <BoxCard
    v-for="carta in cartas"
    :key="carta.id"
    :title="`Vehiculo - ${carta.title}`"
    :color="carta.color"
  />
</div>

  <!-- <template v-for="carta in cartas" :key="carta.id">
    <BoxCard
    :title="carta.title"
    :color="carta.color"/>
  </template> -->


</template>
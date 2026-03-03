<script setup>

defineProps({
  id: Number,
  title: String,
  price: Number,
  description: String,
  image: String,
  rating: Object
})

// ENVUELVO EL CONTENIDO DE PRODUCTCARD EN EL ROUTERLINK...
/*RouterLink genera la URL        →    /clothes/3
Vue Router la procesa           →    route.params.id = "3" EN PRODUCT VIEW
computed() la lee y convierte   →    Number("3") = 3
.find() busca el producto       →    { id: 3, name: "Camisa" } PARA MOSTRARLO */

</script>

<template>
  <RouterLink :to="`/clothes/${id}`">
  
  <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center w-64">


    <div class="w-40 h-40 flex items-center justify-center overflow-hidden mb-4">
      <img 
        :src="image" 
        :alt="`image ${title}`" 
        class="max-w-full max-h-full object-contain"
      >
    </div>
    <div class="font-semibold text-md mb-2">
      {{ title }}
    </div>

    <div class="font-bold text-lg">
      {{ price }} €
    </div>

  </div>
</RouterLink>
</template>
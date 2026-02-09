<script setup>
defineProps({
  Carro : Array,
  cantidadProducto : Number

  })
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="font-sans font-lg font-medium mb-2">
      Carro de la compra:
    </h1>

    <div
      v-for="producto in Carro"
      :key="producto.id"
      class="bg-red-200 border rounded flex items-center justify-between w-md p-2 mb-2"
    >
      <span>{{ producto.name }}</span>
      <span>
        {{ producto.cantidad }} × {{ producto.price }} €
      </span>
    </div>

    <p v-if="Carro.length === 0" class="text-gray-500">
      El carro está vacío 🛒
    </p>
  </div>
</template>
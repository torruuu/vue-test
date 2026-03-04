<script setup>
import { useCarroStore } from './carroStore.js'
const carro = useCarroStore()
</script>

<template>
  <div>
    <h2 class="text-lg font-bold mb-3">🛒</h2>

    <p v-if="carro.itemsCarro.length === 0" class="text-gray-400 text-sm">
      El carrito está vacío.
    </p>

    <ul v-else class="flex flex-col gap-2">
      <li v-for="item in carro.itemsCarro" :key="item.id" class="flex justify-between text-sm">
        <span class="flex-1">{{ item.title }}</span>
        <span class="text-gray-400 mx-2">x{{ item.cantidad }}</span>
        <span class="font-bold">{{ (item.price * item.cantidad) }} €</span>
      </li>
    </ul>
  </div>
  <div v-if="carro.itemsCarro.length > 0" class="mt-4 border-t pt-3 text-right font-bold">
  Total: {{ carro.total }} €
</div>
</template>
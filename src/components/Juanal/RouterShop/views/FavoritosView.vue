<script setup>
import { storeToRefs } from 'pinia'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { useCarroStore } from '../stores/carroStore.js'
import { Heart, ShoppingCart } from 'lucide-vue-next'
import ProductoItem from '../components/ProductoItem.vue'

const favorites = useFavoritesStore()
const carro = useCarroStore()
const { itemsFavoritos } = storeToRefs(favorites)
//AQUI IMPORTAMOS EL PRODUCTO ITEM, PORQUE HAY ELEMENTOS COMUNES Y LUEGO EN EL APARTADO TEMPLATE METEMOS EL SLOT ACCIONES. UNO CON DOS BOTONES, OTRO CON UNO.
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">❤️ Favoritos</h1>

    <p v-if="itemsFavoritos.length === 0" class="text-gray-400">No tienes favoritos aún.</p>

    <ul v-else class="flex flex-col gap-4">
      <ProductoItem v-for="product in itemsFavoritos" :key="product.id" :product="product">
        <template #acciones>
          <button @click="carro.addItem(product)" class="text-gray-400 hover:text-black transition-colors">
            <ShoppingCart :size="18" />
          </button>
          <button @click="favorites.toggleFavorito(product)" class="text-red-400 hover:text-red-600">
            <Heart :size="18" fill="currentColor" />
          </button>
        </template>
      </ProductoItem>
    </ul>
  </div>
</template>
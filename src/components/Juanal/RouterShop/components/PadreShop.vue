<script setup>
import ProductCardShop from './ProductCardShop.vue'
import { products } from '../products.js'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import {Heart} from 'lucide-vue-next';
const favorites = useFavoritesStore();

</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCardShop
  v-for="product in products"
  :key="product.id"
  :id="product.id"
  :title="product.title"
  :price="product.price"
  :description="product.description"
  :image="product.image"
  :rating="product.rating"
>
  <template #acciones>
    <button
      @click="favorites.toggleFavorito(product)"
      class="hover:text-red-400 transition-colors"
      :class="favorites.toggleFavorito(product.id) ? 'text-red-500' : 'text-gray-300'"
    >
      <Heart :size="20"/>
    </button>
  </template>
</ProductCardShop>

  </div>
  </div>
  </div>
</template>
    
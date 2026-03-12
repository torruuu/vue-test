<script setup>
import ProductCardShop from './ProductCardShop.vue'
import { onMounted } from 'vue'
import { useProductos } from "../composables/useProducts.js"
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { Heart } from 'lucide-vue-next'

const favorites = useFavoritesStore()
const { loading, error, productos, fetchProductos, cargarMas } = useProductos();

onMounted(() => fetchProductos())
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div v-if="loading" class="text-center mt-20 text-gray-500">Cargando productos...</div>
    <div v-else-if="error" class="text-center mt-20 text-red-500">Error al cargar los productos...</div>

    <div v-else class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCardShop
          v-for="product in productos"
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
            >
              <Heart :size="20" />
            </button>
          </template>
        </ProductCardShop>
      </div>
      <button
        @click="cargarMas"
        :disabled="loading"
        class="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        Cargar más
      </button>
    </div>
  </div>
</template>
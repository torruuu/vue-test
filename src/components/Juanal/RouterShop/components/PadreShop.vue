<script setup>
import ProductCardShop from './ProductCardShop.vue'
import { onMounted } from 'vue'
import { useProductos } from "../composables/useProducts.js"
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { Heart } from 'lucide-vue-next'

const favorites = useFavoritesStore()
const { data, loading, error, fetchData, cargarMas, BASE_URL } = useProductos()
onMounted(() => fetchData(BASE_URL, { limit: 6 }))
</script>

<template>
  <div class="min-h-screen bg-slate-800 p-8">

    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-white mb-2">Tienda</h1>
      <p class="text-slate-400 mb-8 text-sm">{{ data?.length }} productos disponibles</p>

      <div v-if="loading" class="text-center mt-20 text-slate-400">Cargando productos...</div>
      <div v-else-if="error" class="text-center mt-20 text-red-400">Error al cargar los productos...</div>

      <div v-else class="flex flex-col items-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <ProductCardShop
            v-for="product in data"
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
          class="mt-10 px-8 py-2.5 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-colors"
        >
          Cargar más
        </button>
      </div>
    </div>

  </div>
</template>
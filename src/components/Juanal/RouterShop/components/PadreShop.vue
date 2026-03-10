<script setup>
import ProductCardShop from './ProductCardShop.vue'
import { onMounted } from 'vue'
import { useProductosStore } from '../stores/productsStore.js'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { Heart } from 'lucide-vue-next'

const store = useProductosStore()
const favorites = useFavoritesStore()
//MONTAMOS COMPONENTE...
onMounted(() => store.fetchProductos())
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div v-if="store.loading" class="text-center mt-20 text-gray-500">Cargando productos...</div>
    <div v-else-if="store.error" class="text-center mt-20 text-red-500">{{ store.error }}</div>

    <div v-else class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCardShop
          v-for="product in store.productos"
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
    </div>
  </div>
</template>
    
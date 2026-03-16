<script setup>
import { storeToRefs } from 'pinia'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { useCarroStore } from '../stores/carroStore.js'
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-vue-next'
import ProductoItem from '../components/ProductoItem.vue'
import { useRouter } from 'vue-router'

const favorites = useFavoritesStore()
const carro = useCarroStore()
const { itemsFavoritos } = storeToRefs(favorites)
const router = useRouter();

function addAndRemoveItem(product){
  carro.addItem(product);
  favorites.toggleFavorito(product);
}
function removeFavorite(product) {
  favorites.toggleFavorito(product)
}
</script>

<template>
  <div class="min-h-screen bg-slate-800 p-8 pt-16">
    <div class="max-w-2xl mx-auto">

      <button @click="router.back()" class="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
        <ArrowLeft :size="16" />
        Volver a la tienda
      </button>

      <div class="flex items-center gap-3 mb-8">
        <h1 class="text-3xl font-bold text-white">Favoritos</h1>
        <span v-if="itemsFavoritos.length > 0" class="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
          {{ itemsFavoritos.length }}
        </span>
      </div>

      <p v-if="itemsFavoritos.length === 0" class="text-slate-400 text-sm">
        No tienes favoritos aún.
      </p>

      <ul v-else class="flex flex-col gap-3">
        <ProductoItem v-for="product in itemsFavoritos" :key="product.id" :product="product">
          <template #acciones>
            <button @click="addAndRemoveItem(product)" class="text-slate-400 hover:text-slate-800 transition-colors">
              <ShoppingCart :size="18" />
            </button>
            <button @click="removeFavorite(product)" class="text-red-400 hover:text-red-600 transition-colors">
              <Heart :size="18" fill="currentColor" />
            </button>
          </template>
        </ProductoItem>
      </ul>

    </div>
  </div>
</template>
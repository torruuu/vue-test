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

//AQUI IMPORTAMOS EL PRODUCTO ITEM, PORQUE HAY ELEMENTOS COMUNES Y LUEGO EN EL APARTADO TEMPLATE METEMOS EL SLOT ACCIONES. UNO CON DOS BOTONES, OTRO CON UNO.
</script>

<template>
  <div class="max-w-2xl mx-auto p-6 mt-6">
    
    <button @click="router.back()" class="mb-6 flex items-center gap-2 text-black-500 text-lg font-bold">
  <ArrowLeft :size="18" />
  Volver
</button>
<h1 class="text-2xl font-bold mb-6">❤️ Favoritos</h1>

    <p v-if="itemsFavoritos.length === 0" class="text-gray-400">No tienes favoritos aún.</p>

    <ul v-else class="flex flex-col gap-4">
      <ProductoItem v-for="product in itemsFavoritos" :key="product.id" :product="product">
        <template #acciones>
          <button @click="addAndRemoveItem(product)" class="text-gray-400 hover:text-black transition-colors">
            <ShoppingCart :size="18" />
          </button>
          <button @click="removeFavorite(product)" class="text-red-400 hover:text-red-600">
            <Heart :size="18" fill="currentColor" />
          </button>
        </template>
      </ProductoItem>
    </ul>
  </div>
</template>
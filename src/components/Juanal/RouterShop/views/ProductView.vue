<script setup>
import { computed, onMounted } from "vue"
import { useProductos } from "../composables/useProducts.js"
import { useCarroStore } from '../stores/carroStore.js'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { useRoute, useRouter } from "vue-router"
import { Heart, Star, ArrowLeft } from "lucide-vue-next"

const route = useRoute()
const router = useRouter()
const carro = useCarroStore()
const favorites = useFavoritesStore()
const { loading, error, productoDetalle, fetchProductoById } = useProductos();

onMounted(() => fetchProductoById(route.params.id))

const stars = computed(() => {
  const rate = productoDetalle.value?.rating?.rate ?? 0
  const maxStars = 5
  const normalized = Math.round((rate / 5) * maxStars)
  return Array.from({ length: maxStars }, (_, i) => i < normalized)
})

function addItem(product) {
  carro.addItem(product)
}
function removeFavorite(product) {
  favorites.toggleFavorito(product)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-20 mt-10">
    <button @click="router.back()" class="mb-6 flex items-center gap-2 text-black-500 text-lg font-bold">
      <ArrowLeft :size="18" />
      Volver
    </button>
    <div v-if="loading" class="flex justify-center mt-20 text-gray-400 text-lg">
      Cargando producto...
    </div>

    <div v-else class="flex justify-center">
      <div v-if="productoDetalle" class="bg-white rounded-2xl shadow-lg p-10 flex gap-10 max-w-3xl w-full">
        <div class="w-72 h-72 flex items-center justify-center overflow-hidden">
          <img :src="productoDetalle.image" :alt="productoDetalle.title" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="flex flex-col justify-center gap-4 flex-1">
          <h1 class="text-2xl font-bold">{{ productoDetalle.title }}</h1>
          <p class="text-gray-500">{{ productoDetalle.description }}</p>
          <div class="text-3xl font-bold text-green-600">{{ productoDetalle.price }} €</div>
          <div class="flex items-center gap-1">
            <Star v-for="(filled, i) in stars" :key="i" :size="18"
              :fill="filled ? '#facc15' : 'none'"
              :stroke="filled ? '#facc15' : '#d1d5db'" />
            <span class="text-sm text-gray-400 ml-2">({{ productoDetalle.rating.count }} valoraciones)</span>
          </div>

          <div class="flex gap-4 mt-4">
            <button @click="addItem(productoDetalle)" class="flex items-center gap-2 bg-black text-white rounded-xl px-6 py-3">
              Añadir
            </button>
            <button @click="removeFavorite(productoDetalle)">
              <Heart :size="20" :fill="favorites.esFavorito(productoDetalle.id) ? '#ef4444' : 'none'" class="transition-colors" />
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">
        <p class="text-2xl font-bold text-red-500">{{ error ?? "ID de producto no encontrado." }}</p>
      </div>
    </div>
  </div>
</template>
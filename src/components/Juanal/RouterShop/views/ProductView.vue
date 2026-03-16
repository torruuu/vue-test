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
const { data, loading, error, fetchData } = useProductos()
onMounted(() => fetchData(route.params.id))

const stars = computed(() => {
  const rate = data.value?.rating?.rate ?? 0
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
  <div class="min-h-screen bg-slate-800 p-8 pt-16">

    <div class="max-w-4xl mx-auto">
      <button @click="router.back()" class="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
        <ArrowLeft :size="16" />
        Volver a la tienda
      </button>

      <div v-if="loading" class="flex justify-center mt-20 text-slate-400 text-lg">
        Cargando producto...
      </div>

      <div v-else>
        <div v-if="data" class="bg-white rounded-2xl p-10 flex gap-10 w-full">
          <div class="w-72 h-72 min-w-72 flex items-center justify-center overflow-hidden rounded-xl bg-slate-100">
            <img :src="data.image" :alt="data.title" class="max-w-full max-h-full object-contain" />
          </div>

          <div class="flex flex-col justify-center gap-4 flex-1">
            <p class="text-xs text-slate-400 uppercase tracking-widest">{{ data.category }}</p>
            <h1 class="text-2xl font-bold text-slate-800">{{ data.title }}</h1>
            <p class="text-gray-500 text-sm leading-relaxed">{{ data.description }}</p>
            <div class="text-3xl font-bold text-slate-800">{{ data.price }} €</div>
            <div class="flex items-center gap-1">
              <Star v-for="(filled, i) in stars" :key="i" :size="18"
                :fill="filled ? '#facc15' : 'none'"
                :stroke="filled ? '#facc15' : '#d1d5db'" />
              <span class="text-sm text-gray-400 ml-2">({{ data.rating?.count }} valoraciones)</span>
            </div>

            <div class="flex gap-4 mt-4">
              <button @click="addItem(data)" class="flex items-center gap-2 bg-slate-800 text-white rounded-xl px-6 py-3 hover:bg-slate-700 transition-colors">
                Añadir al carrito
              </button>
              <button @click="removeFavorite(data)" class="p-3 rounded-xl border border-slate-200 hover:border-red-300 transition-colors">
                <Heart :size="20" :fill="favorites.esFavorito(data.id) ? '#ef4444' : 'none'" :stroke="favorites.esFavorito(data.id) ? '#ef4444' : '#94a3b8'" class="transition-colors" />
              </button>
            </div>
          </div>
        </div>

        <div v-else class="text-center mt-20">
          <p class="text-2xl font-bold text-red-400">{{ error ?? "ID de producto no encontrado." }}</p>
        </div>
      </div>
    </div>

  </div>
</template>
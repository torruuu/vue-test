<script setup>
import { computed} from "vue"
import { products } from '../products.js'
import { useCarroStore } from '../stores/carroStore.js'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { useRoute, useRouter } from "vue-router"
import { Heart, Star, ArrowLeft } from "lucide-vue-next"


const route = useRoute()
const router = useRouter();
const carro = useCarroStore();
const favorites = useFavoritesStore();

//VARIABLE ESTRELLAS. MUESTRAS LAS ESTRELLAS DETERMINADAS POR EL RATING
const stars = computed(() => {
  const rate = product.value?.rating.rate ?? 0
  const maxStars = 5
  const normalized = Math.round((rate / 10) * maxStars)
  return Array.from({ length: maxStars }, (_, i) => i < normalized)
})

// Busca el producto por el :id de la URL
const product = computed(() =>
  products.find((p) => p.id === Number(route.params.id)),
)
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-20">
       <button @click="router.back()" class="mb-6 flex items-center gap-2 text-black-500 text-lg font-bold">
  <ArrowLeft :size="18" />
  Volver
</button>
    <div
      v-if="product"
      class="bg-white rounded-2xl shadow-lg p-10 flex gap-10 max-w-3xl w-full"
    >
      <div class="w-72 h-72 flex items-center justify-center overflow-hidden">
        <img
          :src="product.image"
          :alt="product.title"
          class="max-w-full max-h-full object-contain"
        />
      </div>

      <div class="flex flex-col justify-center gap-4 flex-1">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <p class="text-gray-500">{{ product.description }}</p>
        <div class="text-3xl font-bold text-green-600">
          {{ product.price }} €
        </div>

        <div class="flex items-center gap-1">
          <Star
            v-for="(filled, i) in stars"
            :key="i"
            :size="18"
            :fill="filled ? '#facc15' : 'none'"
            :stroke="filled ? '#facc15' : '#d1d5db'"
          />
          <span class="text-sm text-gray-400 ml-2"
            >({{ product.rating.count }} valoraciones)</span
          >
        </div>
        <div class="flex gap-4 mt-4">
          <button @click="carro.addItem(product)"
            class="flex items-center gap-2 bg-black text-white rounded-xl px-6 py-3"
          >
        
            Añadir
          </button>

          <button @click="favorites.toggleFavorito(product)">
  <Heart
    :size="20"
    :fill="favorites.esFavorito(product.id) ? '#ef4444' : 'none'"
    class="transition-colors"
  />
</button>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
  <p class="text-2xl font-bold text-red-500">Error</p>
  <p class="text-lg mt-2">ID de producto no encontrado.</p>
</div>

  </div>
</template>

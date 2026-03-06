import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([])

  const getFavorites = computed(() => favorites.value)

  function marcarFavorito(product) {
    const index = favorites.value.findIndex((f) => f.id === product.id) // Con el findIndex si no encuentra la posicion devuelve -1

    if (index !== -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(product)
    }
  }

  function esFavorito(productId) {
    return favorites.value.some((f) => f.id === productId)
  }

  return { favorites, getFavorites, marcarFavorito, esFavorito }
})

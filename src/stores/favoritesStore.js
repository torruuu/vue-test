import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([])

  const getFavorites = computed(() => favorites.value)

  function marcarFavorito(product) {
    const index = favorites.value.findIndex((f) => f.id === product.id)
    if (index !== -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push({
        id: product.id,
        imagen: product.image, // ← normaliza aquí
        nombre: product.title,
        precio: product.price,
      })
    }
  }

  function esFavorito(productId) {
    return favorites.value.some((f) => f.id === productId)
  }

  return { favorites, getFavorites, marcarFavorito, esFavorito }
})

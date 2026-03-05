import { defineStore } from "pinia"
import { ref } from "vue"

export const useFavoritesStore = defineStore("favorites", () => {
  const itemsFavoritos = ref([])

  function toggleFavorito(product) {
    const existe = itemsFavoritos.value.find((i) => i.id === product.id)
    if (existe) {
      itemsFavoritos.value = itemsFavoritos.value.filter(
        (i) => i.id !== product.id,
      )
    } else {
      itemsFavoritos.value.push(product)
    }
  }
  function esFavorito(productId) {
    return itemsFavoritos.value.some((i) => i.id === productId)
  }

  return { itemsFavoritos, toggleFavorito, esFavorito }
})

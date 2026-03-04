import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore("cart", () => {
  const cart = ref([])

  const getCart = computed(() => cart.value)

  function addProduct(product) {
    cart.value.push(product)
  }

  function removeProduct(productId) {
    cart.value = cart.value.filter((p) => p.id !== productId)
  }

  return { cart, getCart, addProduct, removeProduct }
})

export const useFavorites = defineStore("favorite", () => {
  const favorite = ref([])

  const getFavorite = computed(() => favorite.value)

  function addFavorite(producto) {
    favorite.value.push(producto)
  }

  return { favorite, getFavorite, addFavorite }
})

import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore("cart", () => {
  const cart = ref([])

  const getCart = computed(() => cart.value)

  function addProduct(product) {
    const existe = cart.value.find((p) => p.id === product.id)
    if (existe) {
      existe.cantidad++
    } else {
      cart.value.push({
        id: product.id,
        imagen: product.image,
        nombre: product.title,
        precio: product.price,
        cantidad: 1,
      })
    }
  }

  function removeProduct(productId) {
    const existe = cart.value.find((p) => p.id === productId)
    console.log("existe:", existe)
    console.log("cantidad:", existe?.cantidad)

    if (existe.cantidad > 1) {
      existe.cantidad = existe.cantidad - 1
    } else {
      cart.value = cart.value.filter((p) => p.id !== productId)
    }
  }

  return { cart, getCart, addProduct, removeProduct }
})

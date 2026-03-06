import { storeToRefs } from "pinia"
import { useCartStore } from "./cartStore"
import { computed } from "vue"
import { defineStore } from "pinia"

export const useTotalStore = defineStore("total", () => {
  const cartStore = useCartStore()
  const { cart } = storeToRefs(cartStore)

  const total = computed(() => {
    return cart.value.reduce(
      (acumulador, producto) =>
        acumulador + producto.precio * producto.cantidad,
      0,
    )
  })

  return { total }
})

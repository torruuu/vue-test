import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCarroStore = defineStore("carro", () => {
  const itemsCarro = ref([])

  function addItem(product) {
    const productoEnCarro = itemsCarro.value.find((i) => i.id === product.id)
    if (productoEnCarro) {
      productoEnCarro.cantidad++
    } else {
      itemsCarro.value.push({ ...product, cantidad: 1 })
    }
  }
  const total = computed(() => {
    let sum = 0
    itemsCarro.value.forEach((i) => (sum += i.price * i.cantidad))
    return sum
  })

  return { itemsCarro, addItem, total }
})

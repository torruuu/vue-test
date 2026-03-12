import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductosStore = defineStore("productos", () => {
  const productos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const productoDetalle = ref(null)

  async function fetchData(url) {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(url)
      if (!res.ok)
        throw new Error(`Error ${res.status}: fallo en la solicitud.`)
      return await res.json()
    } catch (e) {
      error.value = e.message
      return null
    } finally {
      loading.value = false
    }
  }

  async function fetchProductos() {
    if (productos.value.length > 0) return
    productos.value =
      (await fetchData("https://fakestoreapi.com/products")) ?? []
  }

  async function fetchProductoById(id) {
    productoDetalle.value = await fetchData(
      `https://fakestoreapi.com/products/${id}`,
    )
  }

  return {
    productos,
    productoDetalle,
    loading,
    error,
    fetchProductos,
    fetchProductoById,
  }
})

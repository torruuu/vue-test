import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductosStore = defineStore("productos", () => {
  const productos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const productoDetalle = ref(null)

  async function fetchData(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Error ${res.status}: fallo en la solicitud.`)
    return res.json()
  }

  async function fetchProductos() {
    if (productos.value.length > 0) return
    loading.value = true
    error.value = null
    try {
      productos.value = await fetchData("https://fakestoreapi.com/products")
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  async function fetchProductoById(id) {
    productoDetalle.value = null
    loading.value = true
    error.value = null
    try {
      productoDetalle.value = await fetchData(
        `https://fakestoreapi.com/products/${id}`,
      )
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
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

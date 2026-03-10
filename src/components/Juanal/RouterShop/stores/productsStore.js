import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductosStore = defineStore("productos", () => {
  const productos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const productoDetalle = ref(null)

  async function fetchProductos() {
    if (productos.value.length > 0) return
    loading.value = true
    error.value = null
    try {
      const res = await fetch("https://fakestoreapi.com/products")
      if (!res.ok)
        throw new Error(
          `Error ${res.status}: no se pudieron cargar los productos`,
        )
      productos.value = await res.json()
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
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      if (!res.ok) throw new Error(`Producto no encontrado`)
      productoDetalle.value = await res.json()
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

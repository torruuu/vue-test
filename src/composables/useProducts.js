import { ref } from "vue"
import { getProductos, getProducto } from "@/api/api.js"

export function useProductos() {
  const productos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const limit = ref(6)

  async function cargarProductos(delay = true) {
    loading.value = true
    const { data, error: err } = await getProductos(limit.value, delay)
    productos.value = data ?? []
    error.value = err
    loading.value = false
  }
  async function cargarMas() {
    limit.value += 3
    await cargarProductos(false)
  }

  return { productos, loading, error, cargarProductos, cargarMas }
}

export function useProducto() {
  const producto = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function cargarProducto(id) {
    loading.value = true
    const { data, error: err } = await getProducto(id)
    producto.value = data ?? null
    error.value = err
    loading.value = false
  }

  return { producto, loading, error, cargarProducto }
}

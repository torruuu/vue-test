import { ref, computed } from "vue"
import { fetchApi } from "@/api/api.js"

export function useProductos() {
  const productos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const limit = ref(6)
  const producto = computed(() => productos.value[0])

  async function fetchData(id) {
    loading.value = true
    const url = id
      ? "https://fakestoreapi.com/products/" + id
      : "https://fakestoreapi.com/products"
    const { data, error: err } = await fetchApi(url, { limit: limit.value })
    productos.value = id ? [data] : (data ?? [])
    error.value = err
    loading.value = false
  }

  async function cargarMas() {
    limit.value += 3
    await fetchData()
  }

  return { productos, producto, loading, error, fetchData, cargarMas }
}

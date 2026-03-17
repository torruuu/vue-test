import { ref, computed } from "vue"
import { fetchApi } from "@/api/api.js"

export function useProductos() {
  const productos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const limit = ref(6)
  const producto = computed(() => productos.value[0])

  async function fetchData(url, params) {
    loading.value = true
    const { data, error: err } = await fetchApi(url, params)
    productos.value = Array.isArray(data) ? data : [data]
    error.value = err
    loading.value = false
  }

  async function cargarMas(url) {
    limit.value += 3
    await fetchData(url, { limit: limit.value })
  }

  return { productos, producto, loading, error, fetchData, cargarMas }
}

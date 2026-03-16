import { ref } from "vue"
import { fetchApi } from "../api.js"

const BASE_URL = "https://fakestoreapi.com/products"
const LIMIT_INICIAL = 6
const LIMIT_INCREMENT = 5

export function useProductos() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const limit = ref(LIMIT_INICIAL)

  async function fetchData(url, params = {}) {
    loading.value = true
    error.value = null
    data.value = await fetchApi(url, params)
    loading.value = false
  }

  const cargarMas = () => {
    limit.value += LIMIT_INCREMENT
    return fetchData(BASE_URL, { limit: limit.value })
  }

  return { data, loading, error, fetchData, cargarMas, BASE_URL }
}

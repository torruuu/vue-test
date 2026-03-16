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

  async function fetchData(id = null) {
    loading.value = true
    error.value = null
    try {
      const url = id ? `${BASE_URL}/${id}` : BASE_URL
      const params = id ? {} : { limit: limit.value }
      data.value = await fetchApi(url, params)
    } catch (e) {
      error.value = e.message
      data.value = []
    } finally {
      loading.value = false
    }
  }

  const cargarMas = () => {
    limit.value += LIMIT_INCREMENT
    return fetchData()
  }

  return { data, loading, error, fetchData, cargarMas }
}

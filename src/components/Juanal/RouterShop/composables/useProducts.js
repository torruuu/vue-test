import { ref } from "vue"
import { fetchApi } from "../api.js"

const BASE_URL = "http://localhost:4000"
const LIMIT_INICIAL = 6
const LIMIT_INCREMENT = 5

export function usefetchApi() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const limit = ref(LIMIT_INICIAL)

  async function fetchData(url, params = {}, options = {}) {
    loading.value = true
    error.value = null
    const { data: dataFetch, error: dataError } = await fetchApi(
      `${BASE_URL}${url}`,
      params,
      options,
    )
    data.value = dataFetch
    error.value = dataError
    loading.value = false
  }

  const cargarMas = () => {
    limit.value += LIMIT_INCREMENT
    return fetchData("/products", { limit: limit.value })
  }

  return { data, loading, error, fetchData, cargarMas, BASE_URL }
}

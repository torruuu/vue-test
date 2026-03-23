import { ref } from "vue"
import { fetchApi } from "@/api/api.js"

const BASE_URL = "http://localhost:4000" // sin /products

export function useProductos() {
  const productos = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchData(endpoint, params = {}) {
    loading.value = true
    const { data, error: err } = await fetchApi(BASE_URL + endpoint, params)
    productos.value = data
    error.value = err
    loading.value = false
  }

  async function postData(endpoint, body) {
    loading.value = true
    const { data, error: err } = await fetchApi(
      BASE_URL + endpoint,
      {},
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      },
    )
    loading.value = false
    error.value = err
    return data
  }

  async function cargarMas(limit) {
    await fetchData("/products", { limit })
  }

  return { productos, loading, error, fetchData, postData, cargarMas } // ya no exporta BASE_URL
}

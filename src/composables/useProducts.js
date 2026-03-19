import { ref } from "vue"
import { fetchApi } from "@/api/api.js"

const BASE_URL = "http://localhost:4000/products"

export function useProductos() {
  const productos = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchData(url, params) {
    loading.value = true
    const { data, error: err } = await fetchApi(url, params)
    productos.value = data
    error.value = err
    loading.value = false
  }

  async function postData(url, body) {
    loading.value = true
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    loading.value = false
    return data
  }

  async function cargarMas(limit) {
    await fetchData(BASE_URL, { limit: limit })
  }

  return { productos, loading, error, fetchData, postData, cargarMas, BASE_URL }
}

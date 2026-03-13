//import { Watch } from "vue"
import { ref } from "vue"

const BASE_URL = "https://fakestoreapi.com/products"
const LIMIT_INICIAL = 2
const LIMIT_INCREMENT = 5

const productos = ref([])
const loading = ref(false)
const error = ref(null)
const productoDetalle = ref(null)
const limit = ref(LIMIT_INICIAL)

/*watch(limit, async (nuevoLimit) => {
  loading.value = true
  error.value = null
  try {
    const res = await fetch(`${BASE_URL}?limit=${nuevoLimit}`)
    if (!res.ok) throw new Error(`Error ${res.status}: fallo en la solicitud.`)
    productos.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})*/

/*function cargarMasWatch() {
  limit.value += LIMIT_INCREMENT
}*/
export function useProductos() {
  async function fetchData(fetchUrl) {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(fetchUrl)
      if (!res.ok)
        throw new Error(`Error ${res.status}: fallo en la solicitud.`)
      return await res.json()
    } catch (e) {
      error.value = e.message
      return null
    } finally {
      loading.value = false
    }
  }

  async function fetchProductos() {
    productos.value =
      (await fetchData(`${BASE_URL}?limit=${limit.value}`)) ?? []
  }

  async function cargarMas() {
    limit.value += LIMIT_INCREMENT
    productos.value =
      (await fetchData(`${BASE_URL}?limit=${limit.value}`)) ?? []
  }

  async function fetchProductoById(id) {
    productoDetalle.value = await fetchData(`${BASE_URL}/${id}`)
  }

  return {
    productos,
    productoDetalle,
    loading,
    error,
    fetchProductos,
    fetchProductoById,
    cargarMas,
  }
}

//export {cargarMasWatch}
//USAMOS LA FORMA POR DEFECTO, LA OTRA OPCIÓN ES CON UN WATCH QUE OBSERVA LA VARIABLE REACTIVA LIMIT.

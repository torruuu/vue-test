export async function getProductos(limit = 6, delay = true) {
  if (delay) await new Promise((resolve) => setTimeout(resolve, 2000))
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`,
    )
    const data = await response.json()
    return { data, error: null }
  } catch (e) {
    return { data: null, error: (e.message = "Error al cargar los productos") }
  }
}

export async function getProducto(id) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return { data, error: null }
  } catch (e) {
    return { data: null, error: (e.message = "Error al cargar el producto") }
  }
}

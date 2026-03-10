export async function getProductos() {
  const response = await fetch("https://fakestoreapi.com/products?limit=6")
  const data = await response.json()
  return data
}

export async function getProducto(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return data
}

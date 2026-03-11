export async function getProductos() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch("https://fakestoreapi.com/products?limit=6")
  const data = await response.json()
  return data
}

export async function getProducto(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return data
}

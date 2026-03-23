export async function fetchApi(url, params = {}, options = {}) {
  const urlFinal = new URL(url)
  Object.entries(params).forEach(([key, value]) => {
    urlFinal.searchParams.append(key, value)
  })

  try {
    const response = await fetch(urlFinal, {
      method: options.method || "GET",
      headers: options.headers || {},
      body: options.body ? JSON.stringify(options.body) : undefined,
    })
    const data = await response.json()
    return { data, error: null }
  } catch {
    return { data: null, error: "Error al cargar los datos" }
  }
}

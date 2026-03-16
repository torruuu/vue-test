export async function fetchApi(url, params = {}) {
  const query = new URLSearchParams(params).toString()
  const fullUrl = `${url}${query ? `?${query}` : ""}`

  try {
    const res = await fetch(fullUrl)
    if (!res.ok) throw new Error(`Error ${res.status}: fallo en la solicitud.`)
    return await res.json()
  } catch (e) {
    console.error(e.message) //Para loguear el error y lanzarlo al COMPOSABLE. Es la única forma de meter TRY/CATCH en fetchAPI
    throw e
  }
}

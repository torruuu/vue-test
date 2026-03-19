export async function fetchApi(url, params = {}, options = {}) {
  let data = null
  let error = null
  const query = new URLSearchParams(params).toString()
  const fullUrl = `${url}${query ? `?${query}` : ""}`

  try {
    const res = await fetch(fullUrl, options)
    if (!res.ok) throw new Error(`Error ${res.status}: fallo en la solicitud.`)
    data = await res.json()
  } catch (e) {
    console.error(e.message)
    error = e.message
  }
  return { data, error }
}

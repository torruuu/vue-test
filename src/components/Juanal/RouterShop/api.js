export async function fetchApi(url, params = {}) {
  const query = new URLSearchParams(params).toString()
  const fullUrl = `${url}${query ? `?${query}` : ""}`

  const res = await fetch(fullUrl)
  if (!res.ok) throw new Error(`Error ${res.status}: fallo en la solicitud.`)
  return await res.json()
}

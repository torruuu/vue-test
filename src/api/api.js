export async function fetchApi(url, params = {}) {
  let urlFinal = url + "?"
  for (let key in params) {
    urlFinal += key + "=" + params[key] + "&"
  }

  try {
    const response = await fetch(urlFinal)
    const data = await response.json()
    return { data, error: null }
  } catch {
    return { data: null, error: "Error al cargar los datos" }
  }
}

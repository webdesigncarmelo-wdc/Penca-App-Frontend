const API_URL = "http://192.168.1.116:5100";

export async function getSeasons() {
  const response = await fetch(`${API_URL}/seasons`);

  if (!response.ok) {
    throw new Error("Error al obtener las distintas temporadas");
  }

  return await response.json();
}

export async function getSeasonsByCompetition(id) {
  console.log(id)
  const response = await fetch(`${API_URL}/seasons/competition/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener las distintas temporadas");
  }
  //console.log(response.json())
  return await response.json();
}

export async function getSeason(id) {
  const response = await fetch(`${API_URL}/seasons/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener la temporada");
  }

  return await response.json();
}
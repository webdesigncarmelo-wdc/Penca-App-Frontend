import api from "./api";

export async function getSeasons() {
  const response = await api( "GET", `/seasons` );

  if (!response.ok) {
    throw new Error("Error al obtener las distintas temporadas");
  }

  return await response.json();
}

export async function getSeasonsByCompetition(id) {
  const response = await api( "GET", `/seasons/competition/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener las distintas temporadas");
  }
  //console.log(response.json())
  return await response.json();
}

export async function getSeason(id) {
  const response = await fetch( "GET", `/seasons/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener la temporada");
  }

  return await response.json();
}
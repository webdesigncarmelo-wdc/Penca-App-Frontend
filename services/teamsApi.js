import api from "./api";

export async function getTeams() {

  const response = await api( "GET", "/teams");

  if (!response.ok) {
    throw new Error("Error al obtener los equipos");
  }

  return await response.json();
}

export async function getTeam(id) {
  const response = await api( "GET", `/teams/${id}` );

  if (!response.ok) {
    throw new Error("Error al obtener los equipos");
  }

  return await response.json();
}
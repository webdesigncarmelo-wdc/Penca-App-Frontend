import api from "./api";

export async function getChampionships() {
  const response = await api("GET", `/championships`);

  if (!response.ok) {
    throw new Error("Error al obtener los distintos campeonatos");
  }
  return await response.json();
}

export async function getChampionshipsBySeason(id) {
  const response = await api("GET", `/championships/season/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener los distintos campeonatos");
  }
  //console.log(response.json())
  return await response.json();
}

export async function getChampionship(id) {
  const response = await api("GET", `/championships/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el campeonato");
  }

  return await response.json();
}
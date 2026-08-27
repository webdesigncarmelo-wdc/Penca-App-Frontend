import api from "./api";

export async function getCompetitions() {
  const response = await api("GET", `/competitions`);

  if (!response.ok) {
    throw new Error("Error al obtener las distintas competiciones");
  }
  return await response.json();
}


export async function getCompetition(id) {
  const response = await api("GET", `/competitions/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener la competición");
  }

  return await response.json();
}
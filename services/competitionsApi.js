const API_URL = "http://192.168.1.116:5100";

export async function getCompetitions() {
  const response = await fetch(`${API_URL}/competitions`);

  if (!response.ok) {
    throw new Error("Error al obtener las distintas competiciones");
  }
  return await response.json();
}


export async function getCompetition(id) {
  const response = await fetch(`${API_URL}/competitions/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener la competición");
  }

  return await response.json();
}
const API_URL = "http://192.168.1.116:5100";

export async function getTeams() {
  const response = await fetch(`${API_URL}/teams`);

  if (!response.ok) {
    throw new Error("Error al obtener los equipos");
  }

  return await response.json();
}

export async function getTeam(id) {
  const response = await fetch(`${API_URL}/teams/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener los equipos");
  }

  return await response.json();
}
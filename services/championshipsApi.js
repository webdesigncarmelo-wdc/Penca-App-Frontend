const API_URL = "http://192.168.1.116:5100";

export async function getChampionships() {
  const response = await fetch(`${API_URL}/championships`);

  if (!response.ok) {
    throw new Error("Error al obtener los distintos campeonatos");
  }
  return await response.json();
}

export async function getChampionshipsBySeason(id) {
  const response = await fetch(`${API_URL}/championships/season/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener los distintos campeonatos");
  }
  //console.log(response.json())
  return await response.json();
}

export async function getChampionship(id) {
  const response = await fetch(`${API_URL}/championships/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el campeonato");
  }

  return await response.json();
}
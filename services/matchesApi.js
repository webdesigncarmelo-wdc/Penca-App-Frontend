const API_URL = "http://192.168.1.116:5100";

export async function getMatches(championshipId, filter = {}) {
    const params = new URLSearchParams(filter);

    // const response = await fetch(`${API_URL}/matches`);
    const response = await fetch(`${API_URL}/championships/${championshipId}/matches?${params}`);

    if (!response.ok) {
        throw new Error("Error al obtener los partidos");
    }
    return await response.json();
}

export async function getMatch(id) {
    const response = await fetch(`${API_URL}/matches/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener los partidos");
    }

    return response.json();
}
const API_URL = "http://192.168.1.116:5100";

export async function getMatches() {
    const response = await fetch(`${API_URL}/matches`);

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
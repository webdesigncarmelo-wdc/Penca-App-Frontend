import api from "./api";

export async function getMatches(championshipId, filter = {}) {
    const params = new URLSearchParams(filter);

    const response = await api("GET", `/championships/${championshipId}/matches?${params}`);

    if (!response.ok) {
        throw new Error("Error al obtener los partidos");
    }
    return await response.json();
}

export async function getMatch(id) {
    const response = await api("GET", `/matches/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener los partidos");
    }

    return response.json();
}
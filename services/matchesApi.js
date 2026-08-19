const API_URL = "http://192.168.1.116:5100";

export async function getMatches(filter = {}) {
    const params = new URLSearchParams(filter);

    // const response = await fetch(`${API_URL}/matches`);
    const response = await fetch(`${API_URL}/championships/6a7cebb946c24943d4b3b76c/matches?${params}`);

    if (!response.ok) {
        throw new Error("Error al obtener los partidos");
    }
    return await response.json();
}

export async function getMatches2(filter = {}) {
    const params = new URLSearchParams(filter);

    // const response = await fetch(`${API_URL}/matches`);
    const response = await fetch(`${API_URL}/matches/matchday/6a5fcd31cca76505366a2ab8`);

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
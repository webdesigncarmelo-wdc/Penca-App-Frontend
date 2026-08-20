const API_URL = "http://192.168.1.116:5100";

export async function getStandings(championshipId) {

    const response = await fetch(`${API_URL}/standings?championship=${championshipId}`);

    if (!response.ok) {
        throw new Error("Error al obtener la tabla");
    }
    return await response.json();
}

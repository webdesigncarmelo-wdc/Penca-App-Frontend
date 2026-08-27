import api from "./api";

export async function getStandings(championshipId) {

    const response = await api( "GET", `/standings?championship=${championshipId}` );

    if (!response.ok) {
        throw new Error("Error al obtener la tabla");
    }
    return await response.json();
}
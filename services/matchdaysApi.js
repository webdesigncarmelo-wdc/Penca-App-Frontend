import api from "./api";

export async function getMatchdays() {
    const response = await api("GET", `/matchdays`);

    if (!response.ok) {
        throw new Error("Error al obtener las fechas");
    }
    return await response.json();
}

export async function getMatchday(id) {
    const response = await api("GET", `/matchdays/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener las fechas");
    }

    return response.json();
}
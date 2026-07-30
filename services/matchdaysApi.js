const API_URL = "http://192.168.1.116:5100";

export async function getMatchdays() {
    const response = await fetch(`${API_URL}/matchdays`);

    if (!response.ok) {
        throw new Error("Error al obtener las fechas");
    }
    return await response.json();
}

export async function getMatchday(id) {
    const response = await fetch(`${API_URL}/matchdays/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener las fechas");
    }

    return response.json();
}
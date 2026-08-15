const API_URL = "http://192.168.1.116:5100";

export async function getStandings() {

    // agregar filter

    const response = await fetch(`${API_URL}/standings`);

    if (!response.ok) {
        throw new Error("Error al obtener la tabla");
    }
    return await response.json();
}

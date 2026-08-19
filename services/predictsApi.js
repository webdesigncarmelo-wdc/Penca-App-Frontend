const API_URL = "http://192.168.1.116:5100";

export async function getPredicts(filter = {}) {
    const params = new URLSearchParams(filter);

    const response = await fetch(`${API_URL}/predicts?${params}`);

    if (!response.ok) {
        throw new Error("Error al obtener las predicciones");
    }
    return await response.json();
}

export async function getPredict(id) {
    const response = await fetch(`${API_URL}/predicts/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener la predicción");
    }

    return response.json();
}

export async function savePredict(matchId, userId, homePrediction, awayPrediction) {
    console.log(matchId, userId, homePrediction, awayPrediction)
    const response = await fetch(`${API_URL}/predicts/`, {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
            user: userId,
            match: matchId,
            homeGoals: homePrediction,
            awayGoals: awayPrediction,
        })
    });

    if (!response.ok) {
        throw new Error("Error al guardar la predicción");
    }

    return await response.json();
}
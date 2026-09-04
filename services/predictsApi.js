import api from "./api";

export async function getPredicts(filter = {}) {
    const params = new URLSearchParams(filter);

    const response = await api( "GET", `/predicts?${params}`, {}, true );

    if (!response.ok) {
        throw new Error("Error al obtener las predicciones");
    }
    return await response.json();
}

export async function getPredict(id) {
    const response = await api( "GET", `/predicts/${id}`, {}, true );

    if (!response.ok) {
        throw new Error("Error al obtener la predicción");
    }

    return response.json();
}

export async function savePredict(matchId, userId, homePrediction, awayPrediction) {

    const response = await api( "POST", `/predicts/`, {
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify({
            user: userId,
            match: matchId,
            homeGoals: homePrediction,
            awayGoals: awayPrediction,
        })
    }, true );

    if (!response.ok) {
        throw new Error("Error al guardar la predicción");
    }

    return await response.json();
}
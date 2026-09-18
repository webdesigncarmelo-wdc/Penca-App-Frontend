let accessToken = null;

export function setAccessToken(token) {
    console.log("setAccessToken")
    console.log(token)
    accessToken = token;
}

export function getAccessToken() {
    console.log("FINAL")
    console.log(accessToken)
    return accessToken;
}
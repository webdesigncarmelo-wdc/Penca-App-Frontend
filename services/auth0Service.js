let accessToken = null;

export function setAccessToken(token) {
    accessToken = token;
}

export function auth0Service() {
    return accessToken;
}
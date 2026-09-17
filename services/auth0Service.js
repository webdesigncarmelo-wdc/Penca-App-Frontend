let accessToken = null;
let resolveToken;

const tokenReady = new Promise(resolve => {
    resolveToken = resolve;
});


export function setAccessToken(token) {

    console.log(
        "TOKEN GUARDADO:",
        token ? `${token.slice(0, 30)}...${token.slice(-10)}` : "NO"
    );

    accessToken = token;

    resolveToken(token);
}

export function auth0Service() {

    if (accessToken) {
        return Promise.resolve(accessToken);
    }

    return tokenReady;
}
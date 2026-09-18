import { getAccessToken } from "./ClerkAuthService";

const API_URL = "http://192.168.1.116:5100";

export default async function api(method, url, options = {}, auth = false) {

    let token;

    if (auth) {
        token = await getAccessToken();
        console.log("TOKEN RECIBIDO API:",
            token ? `${token.slice(0, 30)}...${token.slice(-10)}` : "NO"
        );
    }

    const headers = {
        ...options.headers
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        method,
        headers
    });

    return response;
}
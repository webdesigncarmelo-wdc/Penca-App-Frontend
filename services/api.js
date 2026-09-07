const API_URL = "http://192.168.1.116:5100";

import { auth0Service } from "./auth0Service";

export default async function api(method, url, options = {}, auth = false ) {

    console.log("API LLAMADA:", method, url, "AUTH:", auth);

    const token = auth0Service();
    
    const headers = {
        ...options.headers
    };

    if (token && auth) {
        headers.Authorization = `Bearer ${token}`;
    }

    console.log("TOKEN QUE MANDA API:", token);

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        method,
        headers
    });
    
    console.log("HEADERS:", headers);

    return response;
}
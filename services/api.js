const API_URL = "http://192.168.1.116:5100";

import { auth0Service } from "./auth0Service";

export default async function api(method, url, options = {}) {

    const token = auth0Service();
    
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
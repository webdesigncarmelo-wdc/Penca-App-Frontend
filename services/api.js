export async function api(path, getCredentials) {

    const credentials = await getCredentials();

    const token = credentials.accessToken;

    const response = await fetch(
        `http://localhost:5100${path}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
}
export async function debugAuth0(user, getCredentials) {
    const credentials = await getCredentials();

    console.log("========== AUTH0 USER ==========");
    console.log(user);

    console.log("======= AUTH0 CREDENTIALS =======");
    console.log(credentials);

    console.log("============ TOKEN =============");
    console.log(credentials?.accessToken);
}

// archivo de prueba... para ver lo q manda auth0 al logear
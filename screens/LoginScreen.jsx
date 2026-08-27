import { useAuth0 } from "react-native-auth0";
import { useEffect, useState } from "react";

import LoginCard from "../components/LoginCard";
import ProfileCard from "../components/ProfileCard";

import { setAccessToken } from "../services/auth0Service";

export default function LoginScreen() {

    const {
        getCredentials,
        user,
        authorize,
        logout
    } = useAuth0();

    const [credentials, setCredentials] = useState(null);

    useEffect(() => {
        if (user) {
            getCredentials().then(credentials => {
                setCredentials(credentials);
                setAccessToken(credentials?.accessToken);
            });
        }
    }, [user]);

    console.log("AUTH USER:", user);

    if (!user) {
        return <LoginCard authorize={authorize} />;
    }

    return (
        <ProfileCard
            user={user}
            credentials={credentials}
            logout={logout}
        />
    );
}
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useAuth0 } from "react-native-auth0";

import LoginCard from "../components/LoginCard";
import ProfileCard from "../components/ProfileCard";
import { setAccessToken } from "../services/auth0Service";

export default function LoginScreen() {

    const { width } = useWindowDimensions();

    const isCompactHeader = width < 850;

    const {
        getApiCredentials,
        user,
        authorize,
        clearSession,
    } = useAuth0();

    const [credentials, setCredentials] = useState(null);

    useEffect(() => {

        if (!user) return;

        getApiCredentials("https://api.backend.penca.wdc")
            .then((credentials) => {

                console.log("========== CREDENTIALS ==========");
                console.log(credentials);

                console.log("ACCESS TOKEN:");
                console.log(credentials?.accessToken);

                console.log("=================================");

                setCredentials(credentials);

                setAccessToken(credentials?.accessToken);
            })
            .catch((error) => {

                console.log("========== ERROR CREDENTIALS ==========");
                console.log(error);
                console.log("=======================================");

            });

    }, [user]);

    if (!user) {

        return (
            <LoginCard
                authorize={authorize}
                compact={isCompactHeader}
            />
        );
    }

    console.log("----------");
    console.log(user);
    console.log("----------");

    console.log(user?.sub);

    console.log("----------");

    console.log(user?.email);

    console.log("----------");

    return (
        <ProfileCard
            user={user}
            credentials={credentials}
            logout={clearSession}
            compact={isCompactHeader}
        />
    );
}
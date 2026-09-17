import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useAuth0 } from "react-native-auth0";
import { useUser } from '@clerk/expo';
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

    const { Clerkuser } = useUser();
    console.log(`CLERK: ${Clerkuser}`);

    const [credentials, setCredentials] = useState(null);

    useEffect(() => {
        if (!user) {
            setCredentials(null);
            setAccessToken(null);
            return;
        }

        getApiCredentials("https://api.backend.penca.wdc")
            .then((credentials) => {
                setCredentials(credentials);
                setAccessToken(credentials?.accessToken);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    const handleLogout = async () => {
        try {
            await clearSession({
                customScheme: "pencawdc",
            });
        } catch (error) {
            console.log("Error al cerrar sesión:", error);
        }
    };

    if (!user) {

        return (
            <LoginCard
                authorize={authorize}
                compact={isCompactHeader}
            />
        );
    }

    return (
        <ProfileCard
            user={user}
            credentials={credentials}
            logout={handleLogout}
            compact={isCompactHeader}
        />
    );
}
import { useEffect, useState } from "react";
import LoginCard from "../components/LoginCard";
import ProfileCard from "../components/ProfileCard";
import { useAuth0 } from "react-native-auth0";
import { setAccessToken } from "../services/auth0Service";
import { useWindowDimensions } from "react-native";

export default function LoginScreen() {

    // responsive
    const { width } = useWindowDimensions();
    const isCompactHeader = width < 850;

    const {
        getCredentials,
        user,
        authorize,
        clearSession
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
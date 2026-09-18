import { useWindowDimensions } from "react-native";
import { useEffect } from 'react';
import { useUser, useAuth } from "@clerk/expo";
import LoginCard from "../components/LoginCard";
import ProfileCard from "../components/ProfileCard";
import { setAccessToken } from "../services/ClerkAuthService.js"

export default function LoginScreen() {

    const { width } = useWindowDimensions();

    const isCompactHeader = width < 850;

    const { signOut, getToken } = useAuth();
    const { user } = useUser();

    useEffect(() => {
        console.log("START")
         const getterToken = async () => {
            if (!user) {
                setAccessToken(null);
                console.log("NULL")
                return;
            }
            const token = await getToken();
            setAccessToken(token);
            console.log(token)
        };

        getterToken();
    }, [user]);

    if (!user) {
        return (
            <LoginCard
                compact={isCompactHeader}
            />
        );
    }

    return (
        <ProfileCard
            user={user}
            logout={signOut}
            compact={isCompactHeader}
        />
    );
}
import { useWindowDimensions } from "react-native";
import { useUser, useAuth } from "@clerk/expo";
import LoginCard from "../components/LoginCard";
import ProfileCard from "../components/ProfileCard";

export default function LoginScreen() {

    const { width } = useWindowDimensions();

    const isCompactHeader = width < 850;

    const { signOut } = useAuth();
    const { user } = useUser();
    console.log("CLERK USER:", user);

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
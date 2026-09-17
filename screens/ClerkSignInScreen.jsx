import { Platform, View } from "react-native";
import { SignIn } from "@clerk/expo/web";
import { AuthView } from "@clerk/expo/native";

export default function ClerkSignInScreen() {

    if (Platform.OS === "web") {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <SignIn />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <AuthView mode="signIn" />
        </View>
    );
}
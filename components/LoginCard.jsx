import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LoginCard({ authorize, compact }) {

    const handleLogin = async () => {
        try {
            await authorize(
                { scope: "openid profile email offline_access" },
                { customScheme: "pencawdc" }
            );
        } catch (error) {
            console.log("Error al iniciar sesión:", error);
        }
    };

    return (
        <View style={[styles.auth, compact && styles.authCompact]} >
            <Pressable onPress={handleLogin}>
                <Text style={styles.title}>Iniciar sesión</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.title}>Registrarse</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    auth: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 15,
        marginHorizontal: 20,
    },

        authCompact: {
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 5,
    },

    authSmall: {
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 5,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
    },

});
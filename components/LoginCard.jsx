import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LoginCard({ authorize }) {

    const handleLogin = async () => {
        try {
            await authorize(
                {scope: "openid profile email offline_access"},
                {customScheme: "pencawdc",}
            );
        } catch (error) {
            console.log("Error al iniciar sesión:", error);
        }
    };

    return (
        <View style={styles.auth}>
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
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 15,
        marginHorizontal: 20
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
    }

});
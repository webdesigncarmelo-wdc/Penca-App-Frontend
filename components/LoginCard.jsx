import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAuth0 } from "react-native-auth0";

// 1pruebas de auth0 ... borrar dsp
import { debugAuth0 } from "../services/auth0Debug.js";

export default function LoginCard() {
    // auth0 magics
    const { authorize } = useAuth0();
    const handleLogin = async () => {
        try {
            await authorize();
        } catch (error) {
            console.log("Error al iniciar sesión:", error);
        }};

    // 2pruebas de auth0 ... borrar dsp
    const { user, getCredentials } = useAuth0();
    const handleDebug = async () => {
        await debugAuth0(user, getCredentials);
    }

    return (
    <View style={styles.auth}>
        <Pressable onPress={handleLogin}>
            <Text style={styles.title}>Iniciar sesión</Text>
        </Pressable>

        <Pressable>
            <Text style={styles.title}>Registrarse</Text>
        </Pressable>

        <Pressable onPress={handleDebug}>
            <Text style={styles.title}>DEBUG</Text>
        </Pressable>
    </View>
)}

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
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginCard({ compact }) {

    const navigation = useNavigation();

    return (
        <View
            style={[
                styles.auth,
                compact && styles.authCompact,
            ]}
        >

            <Pressable onPress={() => navigation.navigate("ClerkSignIn")}>
                <Text style={styles.title}>
                    Iniciar sesión
                </Text>
            </Pressable>

            <Pressable>
                <Text style={styles.title}>
                    Registrarse
                </Text>
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

    title: {
        fontSize: 18,
        fontWeight: "700",
    },

});
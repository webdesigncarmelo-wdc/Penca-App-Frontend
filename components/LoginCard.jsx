import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LoginCard() {
    return (
    <View style={styles.auth}>
        <Pressable>
            <Text style={styles.title}>Iniciar sesión</Text>
        </Pressable>

        <Pressable>
            <Text style={styles.title}>Registrarse</Text>
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
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ProfileCard({ logout }) {

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log("Error al cerrar sesión:", error);
        }
    };

    return (
        <View style={styles.auth}>
            <Pressable>
                <Text style={styles.title}>Perfil</Text>
            </Pressable>

            <Pressable onPress={handleLogout}>
                <Text style={styles.title}>Cerrar sesión</Text>
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
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useState } from "react";

export default function ProfileCard({ logout, compact }) {

    const [visible, setVisible] = useState(false);

    const handleLogout = async () => {
        try {
            setVisible(false);
            await logout();
        } catch (error) {
            console.log("Error al cerrar sesión:", error);
        }
    };

    return (
        <>
            <View style={[styles.auth, compact && styles.authCompact]}>

                <Pressable>
                    <Text style={styles.title}>Perfil</Text>
                </Pressable>

                <Pressable onPress={() => setVisible(true)}>
                    <Text style={styles.title}>Cerrar sesión</Text>
                </Pressable>

            </View>

            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.modalOverlay}>

                    <View style={styles.panel}>

                        <Text style={styles.modalTitle}>
                            ¿Cerrar sesión?
                        </Text>

                        <Text style={styles.message}>
                            ¿Estás seguro de que querés cerrar sesión?
                        </Text>

                        <View style={styles.buttons}>

                            <Pressable
                                style={styles.button}
                                onPress={() => setVisible(false)}
                            >
                                <Text style={styles.buttonText}>
                                    No
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.button}
                                onPress={handleLogout}
                            >
                                <Text style={styles.buttonText}>
                                    Sí
                                </Text>
                            </Pressable>

                        </View>

                    </View>

                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({

    auth: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
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

    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.35)",
    },

    panel: {
        width: "80%",
        maxWidth: 600,

        backgroundColor: "#FFF",

        borderRadius: 45,

        paddingVertical: 25,
        paddingHorizontal: 20,
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
    },

    message: {
        marginTop: 10,
        textAlign: "center",
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
        marginTop: 20,
    },

    button: {
        minWidth: 80,

        paddingVertical: 10,
        paddingHorizontal: 20,

        borderRadius: 50,

        backgroundColor: "#1976D2",

        alignItems: "center",
    },

    buttonText: {
        color: "#FFF",
        fontWeight: "700",
    },

});
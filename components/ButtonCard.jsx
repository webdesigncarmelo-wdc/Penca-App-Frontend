import { Pressable, Text, StyleSheet } from "react-native";

export default function AppButton({
  children,
  onPress,
  width = "100%",
}) {
  return (
    <Pressable
      style={[styles.button, { width }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,

    backgroundColor: "#1976D2",

    borderRadius: 50,

    paddingVertical: 10,

    alignItems: "center",
    alignSelf: "center",

    margin: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});
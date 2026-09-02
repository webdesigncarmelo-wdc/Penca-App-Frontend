import { Pressable, Text, StyleSheet } from "react-native";

export default function AppButton({ children, onPress, width = "25%",}) {
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
    backgroundColor: "#1976D2",

    borderRadius: 30,

    paddingVertical: 10,
    marginHorizontal: "1%",

    alignItems: "center",
    alignSelf: "center",
    height: 40,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
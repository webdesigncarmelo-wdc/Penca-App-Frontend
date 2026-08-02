import { View, Text, StyleSheet } from "react-native";

export default function MatchScore({ score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
});
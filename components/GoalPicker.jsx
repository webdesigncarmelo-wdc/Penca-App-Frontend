import { View, Text, Pressable, StyleSheet } from "react-native";

export default function GoalPicker({
  value = 0,
  onChange,
}) {

  const decrease = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const increase = () => {
    if (value < 6) {
      onChange(value + 1);
    }
  };

  return (
    <View style={styles.container}>

      <Pressable
        style={styles.button}
        onPress={decrease}
      >
        <Text style={styles.buttonText}>−</Text>
      </Pressable>

      <Text style={styles.value}>
        {value}
      </Text>

      <Pressable
        style={styles.button}
        onPress={increase}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  button: {
    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: "#eeeeee",

    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },

  value: {
    minWidth: 25,

    textAlign: "center",

    fontSize: 20,
    fontWeight: "700",
  },

});
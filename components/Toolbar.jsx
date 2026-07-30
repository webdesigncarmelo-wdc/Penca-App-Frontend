import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function Toolbar({ navigation }) {
  return (
     <View style={styles.container}>

      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Inicio</Text>
      </Pressable>


      <Pressable
        onPress={() => navigation.navigate("Teams")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "green" : "white",
          padding: 10,
          borderRadius: 8,
        })}
      >
        <Text>Equipos</Text>
      </Pressable>


      <Pressable onPress={() => navigation.navigate("Table")}>
        <Text>Tabla</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
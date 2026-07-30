import { View, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toolbar from "../components/Toolbar";
import HomeTabs from "../navigation/HomeTabs";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.screen}>
          <HomeTabs />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  screen: {
    flex: 1,

    margin: 10,

    backgroundColor: "rgba(255, 255, 255, 0.5)",

    borderRadius: 28,

    overflow: "hidden",
  },
});
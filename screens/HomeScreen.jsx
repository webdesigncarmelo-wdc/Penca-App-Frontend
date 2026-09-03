import { View, ImageBackground, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Selector from "../components/Selector";
import LoginScreen from "../screens/LoginScreen";
import HomeTabs from "../navigation/HomeTabs";

export default function HomeScreen() {

  const { width } = useWindowDimensions();
  const isPhone = width < 900;

  return (
    <SafeAreaView style={styles.safeArea}>

      <ImageBackground
        source={!isPhone ? require("../assets/images/bg.jpg") : undefined}
        style={styles.background}
      >

        <View
          style={[ styles.screen, 
            { width: isPhone ? "100%" : "50%" } ]}>
              
          <View style={styles.header}>

            <Selector />

            <LoginScreen />

          </View>

          <HomeTabs style={styles.hometabs}/>
            
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    alignItems: "center",
  },

  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ecfffd",
  },

  hometabs: {
    width: "10%",
    flex: 1,
    backgroundColor: "red",
  },

});
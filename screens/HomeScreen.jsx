import { View, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTabs from "../navigation/HomeTabs";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>

      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        style={styles.background}
      >

        <View style={styles.screen}>

          {/* Fondo translúcido */}
          <View style={styles.overlay} />


          {/* Contenido */}
          <View style={styles.content}>
            <HomeTabs />
          </View>


        </View>

      </ImageBackground>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  safeArea:{
    flex:1,
  },


  background:{
    flex:1,

    width: "100%",
  },


  screen:{
    flex:1,

    margin:10,

    borderRadius:28,

    overflow:"hidden",
  },


  overlay:{
    position:"absolute",

    top:0,
    left:0,
    right:0,
    bottom:0,

    backgroundColor:"rgba(255,255,255,0.00)",
  },


  content:{
    flex:1,
    width: "50%",
    minWidth:700,
    alignSelf: "center",
  },

});
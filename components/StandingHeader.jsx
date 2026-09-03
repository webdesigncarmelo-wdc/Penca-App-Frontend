import { View, Text, StyleSheet } from "react-native";
import { useChampionship } from "../context/ChampionshipContext";
import { useWindowDimensions } from "react-native";

export default function StandingHeader() {

  // Variables Context
  const {
    competition,
    season,
    championship
  } = useChampionship();

  // responsive
  const { width } = useWindowDimensions();
  const isSmall = width < 800;

  return (
    <View style={styles.row}>

      {/* Posición */}
      <View style={styles.positionColumn}>
        <Text style={styles.position}>
          -
        </Text>
      </View>

      {/* ChampionShip + Season */}
      <View style={styles.nameColumn}>
        <Text 
          style={styles.champName}
          numberOfLines={1}
        >
          {championship?.name} {season?.name}
        </Text>
      </View>

      <View style={styles.statColumn}>
        <Text style={styles.stat}>P</Text>
      </View>

      <View style={styles.statColumn}>
        <Text style={styles.stat}>G+</Text>
      </View>

      <View style={styles.statColumn}>
        <Text style={styles.stat}>G-</Text>
      </View>

      <View style={styles.statColumn}>
        <Text style={styles.stat}>+-</Text>
      </View>

      <View style={styles.pointsColumn}>
        <Text style={styles.points}>Pts</Text>
      </View>

    </View>
    );
  }
  
  
const styles = StyleSheet.create({

  row:{
    flexDirection:"row",
    alignItems:"center",

    width:"100%",
    alignSelf: "center",
    backgroundColor: "#e2e2e2",

    paddingHorizontal:0,
    paddingVertical:5,

    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:"#000000",
  },

  positionColumn: {
    width: 35,
    alignItems: "center",
  },

  position: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
  },

  nameColumn:{
    flex:1,
    paddingLeft:6,
    paddingVertical: "2%"
  },

  champName:{
    fontSize:18,
    fontWeight:"600",
    color:"#222",
  },

  statColumn: {
    width: "7%",
    alignItems: "center",
  },

  stat: {
    fontSize: 15,
    color: "#555",
  },

  pointsColumn: {
    width: "10%",
    alignItems: "center",
  },

  points: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },
});
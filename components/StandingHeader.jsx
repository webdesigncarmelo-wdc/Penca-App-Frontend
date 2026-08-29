import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";
import { useChampionship } from "../context/ChampionshipContext";

export default function StandingHeader() {

  // Variables del Context
    const {
      competition,
      season,
      championship
    } = useChampionship();

  return (
    <View style={styles.row}>

      {/* Posición */}
      <View style={styles.positionColumn}>
        <Text style={styles.position}>
          -
        </Text>
      </View>

      {/* Escudo */}
      <View style={styles.shieldColumn}>
        <ShieldBadge
          image={teamImages[competition?.image]}
          size={50}
        />
      </View>


      {/* ChampionShip + Season */}
      <View style={styles.nameColumn}>
        <Text 
          style={styles.teamName}
          numberOfLines={1}
        >
          {championship?.name} {season?.name}
        </Text>
      </View>


      <View style={styles.statsHeader}>

        <View style={styles.statColumn}>
          <Text style={styles.stat}>PJ</Text>
        </View>

        <View style={styles.statColumn}>
          <Text style={styles.stat}>GF</Text>
        </View>

        <View style={styles.statColumn}>
          <Text style={styles.stat}>GC</Text>
        </View>

        <View style={styles.statColumn}>
          <Text style={styles.stat}>DG</Text>
        </View>

        <View style={styles.pointsColumn}>
          <Text style={styles.points}>PTS</Text>
        </View>

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
    backgroundColor: "#c0c0c0",

    paddingHorizontal:12,
    paddingVertical:12,

    borderBottomWidth:1,
    borderBottomColor:"#000000",
  },

  positionColumn:{
    width:35,
    alignItems:"center",
  },

  position:{
    fontSize:15,
    fontWeight:"600",
    color:"#555",
  },

  shieldColumn:{
    width:48,
    alignItems:"center",
  },

  nameColumn:{
    flex:1,
    paddingLeft:6,
  },

  teamName:{
    fontSize:18,
    fontWeight:"600",
    color:"#222",
  },

  statColumn: {
    width: 40,
    alignItems: "center",
  },

  stat: {
    fontSize: 15,
    color: "#555",
  },

  pointsColumn: {
    width: 50,
    alignItems: "center",
  },

  points: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },

  statsHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 13,
  },

});
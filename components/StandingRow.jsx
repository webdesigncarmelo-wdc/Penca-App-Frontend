import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";

export default function StandingRow({ team, position }) {
  return (
    <View style={styles.row}>

      {/* Posición */}
      <View style={styles.positionColumn}>
        <Text style={styles.position}>
          {position}
        </Text>
      </View>
      

      {/* Escudo */}
      <View style={styles.shieldColumn}>
        <ShieldBadge
          image={teamImages[team.team.image]}
          size={38}
        />
      </View>


      {/* Equipo */}
      <View style={styles.nameColumn}>
        <Text 
          style={styles.teamName}
          numberOfLines={1}
        >
          {team.team.name}
        </Text>
      </View>


      {/* PJ */}
      <View style={styles.statColumn}>
        <Text style={styles.stat}>
          {team.played}
        </Text>
      </View>


      {/* GF */}
      <View style={styles.statColumn}>
        <Text style={styles.stat}>
          {team.goalsFor}
        </Text>
      </View>


      {/* GC */}
      <View style={styles.statColumn}>
        <Text style={styles.stat}>
          {team.goalsAgainst}
        </Text>
      </View>


      {/* Puntos */}
      <View style={styles.pointsColumn}>
        <Text style={styles.points}>
          {team.points}
        </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  row:{
    flexDirection:"row",

    alignItems:"center",

    width:"50%",
    minWidth:700,

    alignSelf:"center",

    backgroundColor:"#ffffff",

    paddingHorizontal:18,
    paddingVertical:12,

    borderBottomWidth:1,
    borderBottomColor:"#eeeeee",

  },


  positionColumn:{
    width:40,

    alignItems:"center",
  },


  position:{
    fontSize:16,

    fontWeight:"600",

    color:"#555",
  },


  shieldColumn:{
    width:55,

    alignItems:"center",
  },


  nameColumn:{
    flex:1,

    paddingLeft:10,
  },


  teamName:{
    fontSize:18,

    fontWeight:"600",

    color:"#222",
  },


  statColumn:{
    width:45,

    alignItems:"center",
  },


  stat:{
    fontSize:16,

    color:"#555",
  },


  pointsColumn:{
    width:55,

    alignItems:"center",
  },


  points:{
    fontSize:18,

    fontWeight:"bold",

    color:"#222",
  },

});
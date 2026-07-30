import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";

export default function StandingRow({ team }) {
  return (
    <View style={styles.row}>

      <View style={styles.positionColumn}>
        <Text>{team.position}</Text>
      </View>


      <View style={styles.ShieldColumn}>
        <ShieldBadge image={ teamImages[team.image] }/>
      </View>
      

      <View style={styles.nameColumn}>
        <Text>{team.name}</Text>
      </View>

      <View style={styles.column}>
        <Text>{team.played}</Text>
      </View>

      <View style={styles.column}>
        <Text>{team.goalsFor}</Text>
      </View>

      <View style={styles.column}>
        <Text>{team.goalsAgainst}</Text>
      </View>

      <View style={styles.column}>
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
    padding:5,
    borderBottomWidth:1,
  },

  positionColumn:{
    width:20,
    alignItems:"left",
  },

  nameColumn:{
    flex:1,
    margin: 10
  },

  column:{
    width:30,
    alignItems:"baseline",
  },

  points:{
    fontWeight:"bold",
  },

  ShieldColumn:{
  },

});
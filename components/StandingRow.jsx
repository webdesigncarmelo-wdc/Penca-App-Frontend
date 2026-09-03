import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";
import { useWindowDimensions } from "react-native";

export default function StandingRow({ team, position }) {

  // responsive
  const { width } = useWindowDimensions();
  const isSmall = width < 800;

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
        <Text style={styles.teamName} numberOfLines={1}>
          {isSmall ? team.team.shortName.toUpperCase() : team.team.name}
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

       {/* Goal diff */}
      <View style={styles.statColumn}>
        <Text style={styles.stat}>
          {team.goalDifference}
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

  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,

    width: "100%",
    alignSelf: "center",

    backgroundColor: "#ffffff",

    paddingHorizontal: 0,
    paddingVertical: 5,

    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
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

  nameColumn: {
    flex: 1,
    paddingLeft: 6,
  },

  teamName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
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
import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge";
import MatchScore from "./MatchScore";
import { teamImages } from "../assets/clubs/teamImages";

export default function MatchCard({ homeTeam, awayTeam, homeGoals, awayGoals }) {
   return (
    <View style={styles.cardContainer}>

      {/* Info contextual */}
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>
          Fecha 7 • Domingo 9/8 • 15:30 • Parque Artigas
        </Text>
      </View>

      {/* Partido */}
      <View style={styles.matchRow}>

        {/* Local */}
        <View style={styles.teamContainer}>
          <ShieldBadge
            image={teamImages[homeTeam.image]}
            size={55}
          />

          <Text
            style={styles.teamName}
            numberOfLines={1}
          >
            {homeTeam.name}
          </Text>
        </View>

        {/* Resultado */}
        <View style={styles.scoreContainer}>
          <MatchScore score={homeGoals} />

          <Text style={styles.separator}>-</Text>

          <MatchScore score={awayGoals} />
        </View>

        {/* Visitante */}
        <View style={[styles.teamContainer, styles.teamRight]}>
          <Text
            style={styles.teamName}
            numberOfLines={1}
          >
            {awayTeam.name}
          </Text>

          <ShieldBadge
            image={teamImages[awayTeam.image]}
            size={55}
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  cardContainer: {
    width: "50%",
    minWidth: 700,

    alignSelf: "center",

    backgroundColor: "#ffffff",

    marginVertical: 8,

    borderRadius: 10,

    borderWidth: 1,
    borderColor: "#dddddd",

    overflow: "hidden",
  },

  infoRow: {
    backgroundColor: "#f3f3f3",

    paddingHorizontal: 16,
    paddingVertical: 8,

    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },

  infoText: {
    fontSize: 13,
    color: "#666",
  },

  matchRow: {
    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  teamContainer: {
    flex: 1,

    flexDirection: "row",

    alignItems: "center",

    gap: 12,
  },

  teamRight: {
    justifyContent: "flex-end",
  },

  teamName: {
    fontSize: 20,

    color: "#222",

    fontWeight: "600",
  },

  scoreContainer: {
    width: 140,

    flexDirection: "row",

    justifyContent: "space-evenly",

    alignItems: "center",
  },

  separator: {
    fontSize: 24,

    fontWeight: "bold",

    color: "#666",
  },

});
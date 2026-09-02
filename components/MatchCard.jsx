import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge";
import MatchScore from "./MatchScore";
import { teamImages } from "../assets/clubs/teamImages";
import { useWindowDimensions } from "react-native";

export default function MatchCard({ match, noBorder }) {

  // date render
  const date = match.date
  ? new Date(match.date)
  : new Date("2026-07-30T16:00:00-03:00");

  // responsive
  const { width } = useWindowDimensions();
  const isSmall = width < 800;

  return (
    <View style={[styles.cardContainer, noBorder && styles.noBorder]}>

      {/* Info contextual */}
      <View style={styles.infoRow}>

        <Text style={styles.infoText}>
          {match.matchday.name}
        </Text>

        <Text style={styles.infoText}>
          {date.toLocaleDateString("es-UY", {
            day: "numeric", month: "long",
            timeZone: "America/Montevideo",
          })}
        </Text>

        <Text style={styles.infoText}>
          {date.toLocaleTimeString("es-UY", {
            hour: "2-digit", minute: "2-digit",
            timeZone: "America/Montevideo",
          })}
        </Text>

        <Text style={styles.infoText}>
          Parque Artigas
        </Text>

      </View>

      {/* Partido */}
      <View style={styles.matchRow}>

        {/* Local */}
        <View style={[styles.teamContainer, styles.teamLeft]}>
          <Text style={styles.teamName} numberOfLines={1}>
            {isSmall ? match.homeTeam.shortName.toUpperCase() : match.homeTeam.name}
          </Text>
          <ShieldBadge
            image={teamImages[match.homeTeam.image]}
            size={45}
          />
        </View>

        {/* Resultado */}
        <View style={styles.scoreContainer}>
          <MatchScore score={match.homeGoals} />

          <Text style={styles.separator}>-</Text>

          <MatchScore score={match.awayGoals} />
        </View>

        {/* Visitante */}
        <View style={styles.teamContainer}>
          <ShieldBadge
            image={teamImages[match.awayTeam.image]}
            size={45}
          />
          <Text style={styles.teamName} numberOfLines={1}>
            {isSmall ? match.awayTeam.shortName.toUpperCase() : match.awayTeam.name}
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  cardContainer: {
    width: "99%",

    alignSelf: "center",
    backgroundColor: "#ffffff",

    borderColor: "#e2e2e2",
    overflow: "hidden",
    borderRadius: 1,
    borderWidth: 1,
    marginVertical: 3,
  },

  noBorder: {
    borderWidth: 0,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f3f3f3",

    paddingHorizontal: 16,
    paddingVertical: 6,

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
    paddingTop: 10,
    paddingBottom: 10,
  },

  teamContainer: {
    flex: 1,

    flexDirection: "row",

    alignItems: "center",
    paddingHorizontal: 10,
    gap: 12,
  },

  teamLeft: {
    justifyContent: "flex-end",
  },

  teamName: {
    fontSize: 20,

    color: "#222",

    fontWeight: "600",
  },

  scoreContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  separator: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
  },

});
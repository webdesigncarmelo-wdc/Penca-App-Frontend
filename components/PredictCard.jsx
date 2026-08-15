import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import ShieldBadge from "./ShieldBadge";
import MatchScore from "./MatchScore";
import { teamImages } from "../assets/clubs/teamImages";
import AppButton from "./ButtonCard"
import GoalPicker from "./GoalPicker";

export default function PredictCard({ homeTeam, awayTeam, homeGoals, awayGoals, matchday }) {

  const [homePrediction, setHomePrediction] = useState(0);
  const [awayPrediction, setAwayPrediction] = useState(0);
  const [saved, setSaved] = useState(false);

   return (
    <View style={styles.cardContainer}>

      {/* Info contextual */}
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>
          Fecha {matchday.number}
        </Text>
        <Text style={styles.infoText}>
           •
        </Text>
        <Text style={styles.infoText}>
          Domingo 9/8
        </Text>
        <Text style={styles.infoText}>
           •
        </Text>
        <Text style={styles.infoText}>
          16 : 00
        </Text>
        <Text style={styles.infoText}>
           •
        </Text>
        <Text style={styles.infoText}>
          Parque Artigas
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

      <View style={styles.predictRow}>
        <GoalPicker
          value={homePrediction}
          onChange={setHomePrediction}
        />

        <AppButton
          width="30%"
          onPress={() => {
            setSaved(true);
          }} > {saved ? "Guardado ✓" : "Guardar"}
        </AppButton>

        <GoalPicker
          value={awayPrediction}
          onChange={setAwayPrediction}
        />
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
    flexDirection: "row",
    justifyContent: "space-around",
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
    paddingTop: 18,
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

  predictRow: {
    width: "70%",

    alignSelf: "center",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  success: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  }

});
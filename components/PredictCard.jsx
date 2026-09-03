import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import MatchCard from "./MatchCard";
import ButtonCard from "./ButtonCard"
import GoalPicker from "./GoalPicker";
import { savePredict } from "../services/predictsApi";
import { useWindowDimensions } from "react-native";

export default function PredictCard({ match, predict, userId }) {

  const [homePrediction, setHomePrediction] = useState(0);
  const [awayPrediction, setAwayPrediction] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (predict) {
        setHomePrediction(predict.homeGoals);
        setAwayPrediction(predict.awayGoals);
        setSaved(true);
    } else {
        setHomePrediction(0);
        setAwayPrediction(0);
        setSaved(false);
    }
  }, [predict]);

  // date render
  const date = match.date
  ? new Date(match.date)
  : new Date("2026-07-30T16:00:00-03:00");

  // responsive
  const { width } = useWindowDimensions();
  const isSmall = width < 800;

  return (
    <View style={styles.cardContainer}>

      {/* Match Pending */}
      <View>
       <MatchCard match={match} noBorder />
      </View>

      {/* Predict */}
      <View style={styles.predictRow}>
        <GoalPicker
          value={homePrediction}
          onChange={setHomePrediction}
        />

        <ButtonCard
          width="28%"
          onPress={() => {
            setSaved(true);
            savePredict(
              matchId = match._id, 
              userId,
              homePrediction,
              awayPrediction
            )
          }} > {saved ? "Guardado ✓" : "Guardar"}
        </ButtonCard>

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
    width: "99%",

    alignSelf: "center",
    backgroundColor: "#ffffff",

    borderColor: "#e2e2e2",
    overflow: "hidden",
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 1.5,
  },

  predictRow: {
    width: "99%",

    alignSelf: "center",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -16,
    paddingButton: 20,
  },

});
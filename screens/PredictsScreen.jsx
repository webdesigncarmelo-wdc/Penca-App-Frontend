import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getMatches2 } from "../services/matchesApi";
import { getPredicts } from "../services/predictsApi";
import PredictCard from "../components/PredictCard";

export default function PredictsScreen() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getMatches2({ status: "pending" });
        setMatches(data);
      } catch (error) {
        console.error(error);
      }
    } loadMatches();
  }, []);

  const sortedMatches = [...matches].sort(
    (a, b) => b.matchday.number - a.matchday.number
  );

  const [predicts, setPredicts] = useState([]);

  useEffect(() => {
    async function loadPredicts() {
      try {
        const data = await getPredicts({ user : "6a76068def7454b0fd1861dd" });
        setPredicts(data);
      } catch (error) {
        console.error(error);
      }
    } loadPredicts();
  }, []);

  function linker(matchId, predicts){
    return predicts.find(predict => predict.match === matchId);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedMatches}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <PredictCard
            matchday={item.matchday}
            homeTeam={item.homeTeam}
            awayTeam={item.awayTeam}
            homeGoals={item.homeGoals}
            awayGoals={item.awayGoals}
            matchId={item._id}
            userId = "6a76068def7454b0fd1861dd"
            predict={linker(item._id, predicts)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    // Regulá este valor
    backgroundColor: "rgba(255,255,255,0.00)",
  },

});
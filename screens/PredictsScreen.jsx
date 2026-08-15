import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getMatches } from "../services/matchesApi";
import PredictCard from "../components/PredictCard";

export default function PredictsScreen() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getMatches({ status: "pending" });
        setMatches(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadMatches();
  }, []);

  const sortedMatches = [...matches].sort(
    (a, b) => b.matchday.number - a.matchday.number
  );

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
import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getMatches } from "../services/matchesApi";
import MatchCard from "../components/MatchCard";

export default function MatchesScreen() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadMatches();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MatchCard
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
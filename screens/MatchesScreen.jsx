import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getMatches } from "../services/matchesApi";
import MatchCard from "../components/MatchCard";
import { useChampionship } from "../context/ChampionshipContext";

export default function MatchesScreen() {

  const [matches, setMatches] = useState([]);

  // Variables del Context
    const {
      championship,
      setChampionship
    } = useChampionship();

  useEffect(() => {
    if (!championship) return;
    async function loadMatches() {
      try {
        const data = await getMatches( championship?._id, {  status: "played" });
        setMatches(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadMatches();
  }, [championship]);

  const sortedMatches = [...matches].sort((a, b) => {
  const matchdayA = Number(a.matchday.name.split(" ")[1]);
  const matchdayB = Number(b.matchday.name.split(" ")[1]);

  // Primero: Fecha 5, Fecha 4, Fecha 3...
  if (matchdayA !== matchdayB) {
    return matchdayB - matchdayA;
  }
  // Segundo: fecha/hora del partido, más reciente primero
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedMatches}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MatchCard
            match={item}
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
    paddingHorizontal: 2
  },

});
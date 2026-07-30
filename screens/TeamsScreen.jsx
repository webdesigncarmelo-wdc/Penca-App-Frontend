import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getTeams } from "../services/teamsApi";
import TeamsCard from "../components/TeamsCard";

export default function TeamsScreen() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadTeams();
  }, []);

  return (
    <FlatList
      data={teams}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TeamsCard team={item} />
      )}
    />
  );
}
   
// forma menos optimizada
/* <View>
      {teams.map((team) => (
        <TeamsCard
          key={team._id}
          team={ team }
        />
      ))}
    </View>*/
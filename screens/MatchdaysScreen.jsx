import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getTwo, getTeams } from "../services/teamsApi";
import { teamImages } from "../assets/clubs/teamImages";

import MatchCard from "../components/MatchCard";

export default function MatchdayScreen() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    async function loadMatch() {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadMatch();
  }, []);

  if (!teams) {
    console.log(teams)
    return null;
  }

  return (
    <View style={styles.container}>

      <MatchCard style={styles.matchcard}
        homeTeam={{ ...teams[0], image: teamImages[teams[0].image], }}
        awayTeam={{ ...teams[1], image: teamImages[teams[1].image], }} />

      <MatchCard style={styles.matchcard}
        homeTeam={{ ...teams[8], image: teamImages[teams[8].image], }}
        awayTeam={{ ...teams[9], image: teamImages[teams[9].image], }} />

      <MatchCard style={styles.matchcard}
        homeTeam={{ ...teams[2], image: teamImages[teams[2].image], }}
        awayTeam={{ ...teams[3], image: teamImages[teams[3].image], }} />

      <MatchCard style={styles.matchcard}
        homeTeam={{ ...teams[4], image: teamImages[teams[4].image], }}
        awayTeam={{ ...teams[5], image: teamImages[teams[5].image], }} />

      <MatchCard style={styles.matchcard}
        homeTeam={{ ...teams[10], image: teamImages[teams[10].image], }}
        awayTeam={{ ...teams[7], image: teamImages[teams[7].image], }} />

  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
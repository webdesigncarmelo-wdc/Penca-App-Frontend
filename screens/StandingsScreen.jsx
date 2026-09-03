import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getStandings } from "../services/standingsApi";
import StandingRow from "../components/StandingRow";
import { useChampionship } from "../context/ChampionshipContext";
import StandingHeader from "../components/StandingHeader";

export default function StandingsScreen(){

  // Variables del Context
    const {
      competition,
      setCompetition,
      championship,
      setChampionship
    } = useChampionship();

  const [standings, setStandings] = useState([]);
  useEffect(() => {
      if (!championship) return;
      async function loadStandings() {
        try {
          const data = await getStandings( championship?._id );
          setStandings(data);
        } catch (error) {
          console.error(error);
        }
      }

      loadStandings();
    }, 
  [championship]);

  return(
    <View style={{ flex: 1 }}>
        <FlatList
          data={standings}
          ListHeaderComponent={<StandingHeader />}
          keyExtractor={(item)=>item.team._id}
          renderItem={({item, index})=>(
            <StandingRow team={ item } position={ index+1 }/>
          )}
        />
    </View>
  );
}
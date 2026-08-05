import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getStandings } from "../services/standingsApi";
import StandingRow from "../components/StandingRow";
import StandingHeader from "../components/StandingHeader";

export default function StandingsScreen(){

  const [standings, setStandings] = useState([]);

    useEffect(() => {
      async function loadStandings() {
        try {
          const data = await getStandings();
          setStandings(data);
        } catch (error) {
          console.error(error);
        }
      }

      loadStandings();
    }, []);

  return(
    
    <View style={{ flex: 1 }}>
      <StandingHeader/>
        <FlatList
          data={standings}
          keyExtractor={(item)=>item.team._id}
          renderItem={({item})=>(
            <StandingRow team={item}/>
          )}
        />
    </View>
  );
}
import { FlatList, View } from "react-native";
import StandingRow from "../components/StandingRow";
import StandingHeader from "../components/StandingHeader";
import { standingsData } from "../data/faketabla";

export default function StandingsScreen(){
  return(
    
    <View style={{ flex: 1 }}>
      <StandingHeader/>
        <FlatList
          data={standingsData}
          keyExtractor={(item)=>item.name}
          renderItem={({item})=>(
            <StandingRow team={item}/>
          )}
        />
    </View>
  );
}
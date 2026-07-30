import { FlatList, View } from "react-native";
import PencaRow from "../components/PencaRow";
import PencaHeader from "../components/PencaHeader";
import { pencaData } from "../data/fakepenca";

export default function StandingsScreen(){
  return(
    <View style={{ flex: 1 }}>
      <PencaHeader/>
        <FlatList
          data={pencaData}
          keyExtractor={(item)=>item.name}
          renderItem={({item})=>(
            <PencaRow penca={item}/>
          )}
        />
    </View>
  );
}
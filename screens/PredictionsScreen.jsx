import { FlatList, View } from "react-native";
import PencaRow from "../components/PencaRow";
import PencaHeader from "../components/PencaHeader";
import { pencaData } from "../data/fakepenca";

const orderedUsers = [...pencaData].sort(
  (b, a) => a.points - b.points
);

export default function StandingsScreen(){
  return(
    <View style={{ flex: 1 }}>
      <PencaHeader/>
        <FlatList
          data={orderedUsers}
          keyExtractor={(item)=>item.name}
          renderItem={({item})=>(
            <PencaRow penca={item}/>
          )}
        />
    </View>
  );
}
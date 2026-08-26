import { FlatList, View, StyleSheet } from "react-native";
import PencaRow from "../components/PencaRow";
import PencaHeader from "../components/PencaHeader";
import { pencaData } from "../data/fakepenca";

const orderedUsers = [...pencaData].sort(
  (a, b) => b.points - a.points
);

export default function PencaScreen(){
  return(

    <View style={styles.container}>

      <PencaHeader />

      <FlatList
        data={orderedUsers}

        keyExtractor={(item)=>item.name}

        renderItem={({item})=>(
          <PencaRow penca={item}/>
        )}

        contentContainerStyle={styles.list}

      />

    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,

    backgroundColor:"transparent",
  },


  list:{
    paddingBottom:20,
  },

});
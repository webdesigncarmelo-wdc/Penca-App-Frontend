import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";

export default function PencaRow({ penca }) {
  return (
    <View style={styles.row}>

      <View style={styles.ShieldColumn}>
        <ShieldBadge image={ teamImages[penca.image] }/>
      </View>

      <View style={styles.nameColumn}>
        <Text>{penca.name}</Text>
      </View>

      <View style={styles.column} >
        <Text>{penca.points}</Text>
      </View>

      <View style={styles.column}>
        <Text>{penca.exactResults}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  row:{
    flexDirection:"row",
    alignItems:"center",
    padding:5,
    borderBottomWidth:1,
  },

  positionColumn:{
    width:20,
    alignItems:"left",
  },

  nameColumn:{
    flex:1,
    margin: 10
  },

  column:{
    width:30,
    alignItems:"baseline",
  },

  points:{
    fontWeight:"bold",
  },

  ShieldColumn:{
  },

});
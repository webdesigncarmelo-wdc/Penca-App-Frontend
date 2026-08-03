import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";

export default function PencaRow({ penca }) {
  return (
    <View style={styles.row}>

      {/* Escudo equipo favorito */}
      <View style={styles.shieldColumn}>
        <ShieldBadge
          image={teamImages[penca.image]}
          size={45}
        />
      </View>


      {/* Participante */}
      <View style={styles.nameColumn}>
        <Text 
          style={styles.name}
          numberOfLines={1}
        >
          {penca.name}
        </Text>
      </View>


      {/* Puntos */}
      <View style={styles.pointsColumn}>
        <Text style={styles.points}>
          {penca.points}
        </Text>
      </View>


      {/* Resultados exactos */}
      <View style={styles.resultColumn}>
        <Text style={styles.result}>
          {penca.exactResults}
        </Text>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({

  row:{
    flexDirection:"row",

    alignItems:"center",

    width:"50%",
    minWidth:700,

    alignSelf:"center",

    backgroundColor:"#ffffff",

    paddingHorizontal:18,
    paddingVertical:12,

    borderBottomWidth:1,
    borderBottomColor:"#eeeeee",
  },


  shieldColumn:{
    width:60,

    alignItems:"center",
  },


  nameColumn:{
    flex:1,

    paddingLeft:10,
  },


  name:{
    fontSize:18,

    fontWeight:"600",

    color:"#222",
  },


  pointsColumn:{
    width:70,

    alignItems:"center",
  },


  points:{
    fontSize:18,

    fontWeight:"bold",

    color:"#222",
  },


  resultColumn:{
    width:100,

    alignItems:"center",
  },


  result:{
    fontSize:15,

    color:"#666",
  },

});
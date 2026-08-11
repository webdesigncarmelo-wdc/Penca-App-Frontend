import { View, Text, StyleSheet } from "react-native";

export default function StandingHeader({ team }) {
  return (
    <View style={styles.row}>

        <View style={styles.positionColumn}>
            <Text></Text>
        </View>

        <View style={styles.column}>
            <Text>PJ</Text>
        </View>

        <View style={styles.column}>
            <Text>GF</Text>
        </View>

        <View style={styles.column}>
            <Text>GC</Text>
        </View>

        <View style={styles.column}>
            <Text>Puntos</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({

  row:{
    flexDirection:"row",
    alignItems:"flex-start",
    padding:5,
    borderBottomWidth:1,
  },

  positionColumn:{
    flex:1,
    alignItems:"flex-start",
    width: 20
  },

  column:{
    width:40,
    alignItems:"center",
  },

});
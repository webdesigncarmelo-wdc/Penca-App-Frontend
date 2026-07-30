import { View, Text, Image, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge.jsx";
import { teamImages } from "../assets/clubs/teamImages";

export default function TeamsCard({ team }) {
  return (
    <View style={styles.cardContainer}>
      
      <ShieldBadge image={ teamImages[team.image] } />

      <View style={styles.centerContainer}>
        <Text style={[styles.teamName]} numberOfLines={1}>
          {team.name}
        </Text>
        <Text style={[styles.teamName]} numberOfLines={1}>
          {team._id}
        </Text>

      </View>

    </View>
  );
}
    
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',       // Alinea Escudo - Centro - Escudo
    alignItems: 'center',       // Centra los escudos verticalmente con la zona central
    justifyContent: 'space-between', // Empuja los escudos a los extremos
    backgroundColor: 'rgb(60, 150, 52)', // Un fondo oscuro para que tus escudos brillen
    padding: 5,
    borderRadius: 100,
    width: '80%',               // O el ancho que use tu diseño
    alignSelf: 'center',
    borderColor: '#16235f',
    borderWidth: 2,
    borderStyle: 'solid',
    margin: 1,
  },
  centerContainer: {
    flex: 1,                    // Toma todo el espacio disponible entre los dos escudos
    flexDirection: 'column',    // Organiza nombre1, vs, nombre2 hacia abajo
    justifyContent: 'center',
    paddingHorizontal: 12,      // Despega los textos de los escudos
  },
  teamName: {
    color: '#ffffff',
    fontSize: 25,
    //fontWeight: 'bold',
    fontStyle: 'italic',
    fontWeight: '600',
    
  }
});
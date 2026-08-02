import { View, Text, StyleSheet } from "react-native";
import ShieldBadge from "./ShieldBadge";
import { teamImages } from "../assets/clubs/teamImages";

export default function MatchCard({ homeTeam, awayTeam }) {
  return (
    <View style={styles.cardContainer}>
      

      <View style={styles.ShieldColumn}>
        <ShieldBadge image={teamImages[homeTeam.image]} size={100} />
      </View>

      <View style={styles.centerContainer}>
        <Text style={[styles.teamName, styles.leftAlign]} numberOfLines={1}>
          {homeTeam.name}
        </Text>
        
        <Text style={styles.vsText}>vs</Text>
        
        <Text style={[styles.teamName, styles.rightAlign]} numberOfLines={1}>
          {awayTeam.name}
        </Text>
      </View>

      <View style={styles.ShieldColumn}>
        <ShieldBadge image={teamImages[awayTeam.image]} size={100} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',       // Alinea Escudo - Centro - Escudo
    alignItems: 'center',       // Centra los escudos verticalmente con la zona central
    justifyContent: 'space-between', // Empuja los escudos a los extremos
    backgroundColor: '#3b39c4', // Un fondo oscuro para que tus escudos brillen
    padding: 5,
    borderRadius: 100,
    width: '85%',               // O el ancho que use tu diseño
    alignSelf: 'center',
    borderColor: '#16235f',
    borderWidth: 2,
    borderStyle: 'solid',
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
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontWeight: '600',
    
  },
  vsText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',        // El "vs" siempre se queda en el centro justo
    marginVertical: 2,
  },
  // Las llaves del truco visual:
  leftAlign: {
    textAlign: 'left',          // Pega el nombre 1 al escudo izquierdo
  },
  rightAlign: {
    textAlign: 'right',         // Pega el nombre 2 al escudo derecho
  },
});
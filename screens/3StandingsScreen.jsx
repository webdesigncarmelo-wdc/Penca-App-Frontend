import { FlatList, View } from "react-native";
import StandingRow from "../components/StandingRow";
import StandingHeader from "../components/StandingHeader";
import { getMatches } from "../services/matchesApi";

export default function StandingsScreen(){

  const [matches, setMatches] = useState([]);
  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (error) {
        console.error(error);
      }
    } 
    loadMatches()}, []);

  var standingsData = []

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
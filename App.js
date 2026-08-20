import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import { ChampionshipProvider } from "./context/ChampionshipContext";

export default function App() {
  return (
    <ChampionshipProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ChampionshipProvider>
  );
}
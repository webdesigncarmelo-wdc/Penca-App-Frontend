import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import { ChampionshipProvider } from "./context/ChampionshipContext";
import Auth0Provider from "./context/auth0Provider.jsx"

export default function App() {
  return (
    <ChampionshipProvider>
      <SafeAreaProvider>
        <Auth0Provider>
          <NavigationContainer>
            <RootNavigator/>
          </NavigationContainer>
        </Auth0Provider>
      </SafeAreaProvider>
    </ChampionshipProvider>
  );
}
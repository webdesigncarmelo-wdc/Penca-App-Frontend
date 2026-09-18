import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import { ChampionshipProvider } from "./context/ChampionshipContext";
import ClerkAuthProvider from "./context/ClerkProvider.jsx";

export default function App() {
  return (
    <ChampionshipProvider>
      <SafeAreaProvider>
        <ClerkAuthProvider>
          <NavigationContainer>
            <RootNavigator/>
          </NavigationContainer>
        </ClerkAuthProvider>
      </SafeAreaProvider>
    </ChampionshipProvider>
  );
}
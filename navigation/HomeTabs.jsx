import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MatchdaysScreen from "../screens/MatchdaysScreen";
import MatchesScreen from "../screens/MatchesScreen";
import StandingsScreen from "../screens/StandingsScreen";
import PredictionsScreen from "../screens/PredictionsScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
  return (
  <Tab.Navigator>

    <Tab.Screen
      name="Partidos"
      component={MatchesScreen}
    />

    <Tab.Screen
      name="Posiciones"
      component={StandingsScreen}
    />

    <Tab.Screen
      name="Penca"
      component={PredictionsScreen}
    />

  </Tab.Navigator>
  );
}
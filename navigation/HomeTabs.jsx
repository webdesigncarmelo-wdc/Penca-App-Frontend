import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

import MatchesScreen from "../screens/MatchesScreen";
import StandingsScreen from "../screens/StandingsScreen";
import PencaScreen from "../screens/PencaScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: styles.scene,
        tabBarStyle: styles.tabBar,
      }}
    >
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
        component={PencaScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

  scene: {
    backgroundColor: "rgba(255,255,255,0.00)",
  },

  tabBar: {
    backgroundColor: "rgba(255,255,255,0.00)",

    elevation: 0,

    shadowOpacity: 0,

    borderBottomWidth: 0,
  },

});
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

import MatchesScreen from "../screens/MatchesScreen";
import StandingsScreen from "../screens/StandingsScreen";
import PredictsScreen from "../screens/PredictsScreen";
import PencaScreen from "../screens/PencaScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: styles.scene,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tab.Screen
        style={styles.name}
        name="Partidos"
        component={MatchesScreen}
      />

      <Tab.Screen
        style={styles.name}
        name="Torneo"
        component={StandingsScreen}
      />

      <Tab.Screen
        style={styles.name}
        name="Predicciones"
        component={PredictsScreen}
      />

      <Tab.Screen
        style={styles.name}
        name="Penca"
        component={PencaScreen}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: "#fff",
  },

  tabBar: {
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
});
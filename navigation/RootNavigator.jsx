import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ClerkSignInScreen from "../screens/ClerkSignInScreen.jsx";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="ClerkSignIn"
        component={ClerkSignInScreen}
      />

    </Stack.Navigator>
  );
}
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "@/shared/constants/Colors";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          tabBarLabel: "Главная",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.light.activeIcon,
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tabs.Screen
        name="(settings)/index"
        options={{
          tabBarLabel: "Настройки",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "settings" : "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.light.activeIcon,
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tabs>
  );
}

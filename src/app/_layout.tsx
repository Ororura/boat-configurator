import { FC } from "react";
import { Stack } from "expo-router";

const TabLayout: FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default TabLayout;

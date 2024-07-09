import { FC } from "react";
import { Stack } from "expo-router";
import { StoreProvider } from "@/app/providers/store/StoreProvider";

const TabLayout: FC = () => {
  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </StoreProvider>
  );
};

export default TabLayout;

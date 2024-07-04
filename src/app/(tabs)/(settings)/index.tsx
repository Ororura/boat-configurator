import { FC } from "react";
import { Text, View } from "react-native";
import { settingsStyles } from "./settingsStyles";

const SettingsPage: FC = () => {
  return (
    <View style={settingsStyles.container}>
      <Text>Settings</Text>
    </View>
  );
};

export default SettingsPage;

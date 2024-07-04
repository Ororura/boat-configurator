import { Text, View } from "react-native";
import { FC } from "react";
import { Constructor } from "@/widgets/constructor/ui";
import { styles } from "./homeStyles";
import { SplashScreen } from "@/entities/splashScreen/ui/SplashScreen";

const HomePage: FC = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <Constructor />
    </View>
  );
};

export default HomePage;

import { View } from "react-native";
import { FC } from "react";
import { Constructor } from "@/widgets/constructor/ui";
import { styles } from "./homeStyles";

const HomePage: FC = () => {
  return (
    <View style={styles.container}>
      <Constructor />
    </View>
  );
};

export default HomePage;

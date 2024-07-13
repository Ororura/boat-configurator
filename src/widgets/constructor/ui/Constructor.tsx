import { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { ModelEditing } from "@/features/modelEditing/ui";
import { GLViewEntity } from "@/entities/GLViewEntity/ui/GLViewEntity";

const Constructor: FC = () => {
  return (
    <View style={styles.container}>
      <GLViewEntity />
      <ModelEditing />
    </View>
  );
};

export { Constructor };

import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CanvasEntity } from "@/entities/canvas/ui/CanvasEntity";
import { ModelEditing } from "@/features/modelEditing/ui";

const Constructor: FC = () => {
  return (
    <View style={styles.container}>
      <CanvasEntity />
      <ModelEditing />
    </View>
  );
};

export { Constructor };

import { StyleSheet } from "react-native";
import { Colors } from "@/shared/constants/Colors";

const modelEditingStyles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  picker: {
    backgroundColor: Colors.light.pickerItemBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 12,
    height: 30,
  },
  pickerItem: {
    fontSize: 12,
  },
  text: {
    fontSize: 12,
  },
});

export { modelEditingStyles };

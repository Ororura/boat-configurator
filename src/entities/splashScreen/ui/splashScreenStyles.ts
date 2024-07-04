import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const splashScreenStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flex: 1,
    justifyContent: "center",
  },
  video: {
    height: height,
    width: width,
  },
});

export { splashScreenStyles };

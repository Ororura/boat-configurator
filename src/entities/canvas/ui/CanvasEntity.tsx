import { FC } from "react";
import { Image } from "react-native";
import { canvasEntityStyles } from "./canvasEntityStyles";

const CanvasEntity: FC = () => {
  return <Image style={canvasEntityStyles.image} source={require("../../../shared/assets/images/boat.png")} />;
};

export { CanvasEntity };

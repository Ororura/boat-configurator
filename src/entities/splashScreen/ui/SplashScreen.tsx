import { FC } from "react";
import { ResizeMode, Video } from "expo-av";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { splashScreenStyles } from "./splashScreenStyles";
import { useSkipVideo } from "@/entities/splashScreen/lib/hooks/hooks";

const SplashScreen: FC = () => {
  const { handleCloseVideo, modalVisible, handlerPlaybackStatus } = useSkipVideo();
  return (
    <View style={splashScreenStyles.container}>
      <Modal visible={modalVisible}>
        <TouchableWithoutFeedback onPress={handleCloseVideo}>
          <View style={splashScreenStyles.modalContainer}>
            <Video
              style={splashScreenStyles.video}
              source={require("../../../shared/assets/videos/video.mp4")}
              rate={1.0}
              volume={1.0}
              resizeMode={ResizeMode.COVER}
              isMuted={false}
              shouldPlay
              isLooping={false}
              onPlaybackStatusUpdate={handlerPlaybackStatus}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export { SplashScreen };

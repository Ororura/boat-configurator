import { useCallback, useState } from "react";
import { AVPlaybackStatus, AVPlaybackStatusSuccess } from "expo-av/build/AV";

const useSkipVideo = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  const handleCloseVideo = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);

  const handlerPlaybackStatus = useCallback((status: AVPlaybackStatus) => {
    if (status.isLoaded && (status as AVPlaybackStatusSuccess).didJustFinish) {
      setModalVisible(false);
    }
  }, []);

  return { modalVisible, handleCloseVideo, handlerPlaybackStatus };
};

export { useSkipVideo };

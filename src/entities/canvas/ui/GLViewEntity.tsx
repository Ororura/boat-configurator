import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { GLView, ExpoWebGLRenderingContext } from "expo-gl";
import { Renderer, THREE } from "expo-three";
import { Asset } from "expo-asset";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"; // Import FBXLoader instead of OBJLoader

export const GLViewEntity: FC = () => {
  const onContextCreate = async (gl: ExpoWebGLRenderingContext) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;
    camera.position.y = 20;

    const asset = Asset.fromModule(require("../../../shared/assets/models/boat.fbx"));
    await asset.downloadAsync();
    const loader = new FBXLoader();

    loader.load(asset.localUri || "", (object) => {
      scene.add(object);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  return (
    <View style={styles.container}>
      <GLView style={styles.glView} onContextCreate={onContextCreate} />
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  glView: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  glView: {
    flex: 1,
  },
});

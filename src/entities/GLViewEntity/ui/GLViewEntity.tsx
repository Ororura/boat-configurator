import React, { Suspense } from "react";
import { View } from "react-native";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Asset } from "expo-asset";
import { GLViewEntityStyles } from "./GLViewEntityStyles";

export const GLViewEntity = () => {
  const fbx = useFBX(Asset.fromModule(require("../../../shared/assets/models/boat.fbx")).uri);
  return (
    <View style={GLViewEntityStyles.container}>
      <Canvas style={GLViewEntityStyles.glView} camera={{ position: [40, 90, 50] }} shadows>
        <Suspense fallback={null}>
          <group>
            <primitive object={fbx} receiveShadow="" castShadow="">
              <meshStandardMaterial color="#808080" />
            </primitive>
          </group>
        </Suspense>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={10}
          shadow-camera-right={10}
          shadow-camera-bottom={-10}
          shadow-camera-left={-10}
        />
      </Canvas>
    </View>
  );
};

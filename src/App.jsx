import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <Canvas camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ToneMapping adaptiveExposure={true} />
      </EffectComposer>
    </Canvas>
  );
};

export default App;

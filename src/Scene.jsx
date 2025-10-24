import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import sideImage from "./side.jpg";
const Scene = () => {
  const tex = useTexture(sideImage);
  const scene = useRef(null);
  useFrame((state, delta) => {
    scene.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.5, 0.5]}>
      <mesh ref={scene}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;

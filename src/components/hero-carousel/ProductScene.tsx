"use client";

import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";

type Props = {
  index: number;
};

export default function ProductScene({ index }: Props) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
      <SceneContent index={index} />
    </Canvas>
  );
}

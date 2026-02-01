"use client";

import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";

type Props = {
  index: number;
};

export default function ProductScene({ index }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 35 }}
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance" }}>
      <SceneContent index={index} />
    </Canvas>
  );
}

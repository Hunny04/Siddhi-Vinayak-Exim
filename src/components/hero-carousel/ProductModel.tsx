"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useEffect, useRef } from "react";

type Props = {
  modelPath: string;
};

export default function ProductModel({ modelPath }: Props) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
      ref.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.04;
    }
  });

  //   useEffect(() => {
  //     if (ref.current) {
  //       ref.current.scale.set(1.3, 1.3, 1.3);
  //     }
  //   }, [modelPath]);

  return <primitive ref={ref} object={scene} scale={1.4} position={[0, -0.6, 0]} />;
}

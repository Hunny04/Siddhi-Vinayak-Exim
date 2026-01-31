"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useRef } from "react";

type Props = {
  modelPath: string;
  position: [number, number, number];
  zoom: number;
};

export default function ProductModel({ modelPath, position, zoom }: Props) {
  const groupRef = useRef<Group>(null);
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
      ref.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={zoom}>
      <primitive ref={ref} object={scene} />
    </group>
  );
}

// "use client";

// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Group } from "three";
// import { useEffect, useRef } from "react";

// type Props = {
//   modelPath: string;
//   position: [number, number, number];
//   zoom: number;
// };

// export default function ProductModel({ modelPath, position, zoom }: Props) {
//   const ref = useRef<Group>(null);
//   const { scene } = useGLTF(modelPath);

//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.004;
//       ref.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.04;
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={zoom} position={position} />;
// }

"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ProductModel from "./ProductModel";
import MicroElements from "./MicroElements";
import SmallModels from "./SmallModels";

type Product = {
  name: string;
  model: string;
  rootModel: string;
};

const products: Product[] = [
  {
    name: "ASHWAGANDHA",
    model: "/models/ashwagandha.glb",
    rootModel: "/models/ashwagandha_root.glb",
  },
  {
    name: "SAFED MUSLI",
    model: "/models/safed_musli.glb",
    rootModel: "/models/safed_musli_root.glb",
  },
];

type Props = {
  index: number;
};

export default function RootScene({ index }: Props) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      <directionalLight position={[-4, -2, -5]} intensity={0.5} />
      {/* Small floating roots */}
      <SmallModels modelPath={products[index].rootModel} />
      <Environment preset="warehouse" />
    </Canvas>
  );
}

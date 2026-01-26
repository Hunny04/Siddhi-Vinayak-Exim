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
  position: [number, number, number];
};

const products: Product[] = [
  {
    name: "ASHWAGANDHA",
    model: "/models/ashwagandha.glb",
    rootModel: "/models/ashwagandha_root.glb",
    position: [2, -0.6, 0],
  },
  {
    name: "SAFED MUSLI",
    model: "/models/safed_musli.glb",
    rootModel: "/models/safed_musli_root.glb",
    position: [-2, -0.6, 0],
  },
];

type Props = {
  index: number;
};

export default function ProductScene({ index }: Props) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      <directionalLight position={[-4, -2, -5]} intensity={0.5} />
      <ProductModel modelPath={products[index].model} position={products[index]?.position} />
      <Environment preset="warehouse" />
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}

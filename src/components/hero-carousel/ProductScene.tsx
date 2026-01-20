"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ProductModel from "./ProductModel";
import MicroElements from "./MicroElements";

type Product = {
  name: string;
  model: string;
};

const products: Product[] = [
  {
    name: "ASHWAGANDHA",
    model: "/models/ashwagandha.glb",
  },
  {
    name: "SAFED MUSLI",
    model: "/models/safed_musli.glb",
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
      <ProductModel modelPath={products[index].model} />

      {/* Micro elements */}
      <MicroElements model="/models/ashwagandha_root.glb" active={index === 0} />
      <MicroElements model="/models/safed_musli_root.glb" active={index === 1} />
      <Environment preset="warehouse" />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

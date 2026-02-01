import { useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Environment } from "@react-three/drei";
import ProductModel from "./ProductModel";
import SceneLoader from "./SceneLoader";

type Props = {
  index: number;
};

export default function SceneContent({ index }: Props) {
  const { size } = useThree(); // 👈 THIS updates on resize
  const [layout, setLayout] = useState({
    position: [1, -0.6, 0] as [number, number, number],
    zoom: 1.5,
  });

  useEffect(() => {
    const isDesktop = size.height > 800;

    setLayout({
      position: isDesktop ? (index === 0 ? [2, -0.6, 0] : [-2, -0.6, 0]) : index === 0 ? [1, -0.6, 0] : [-1, -0.6, 0],
      zoom: isDesktop ? 2 : 1.5,
    });
  }, [size.height, index]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      <directionalLight position={[-4, -2, -5]} intensity={0.5} />

      <Suspense fallback={<SceneLoader />}>
        <ProductModel
          modelPath={index === 0 ? "/models/ashwagandha.glb" : "/models/safed_musli.glb"}
          position={layout.position}
          zoom={layout.zoom}
        />
      </Suspense>
      <Environment preset="warehouse" />
    </>
  );
}

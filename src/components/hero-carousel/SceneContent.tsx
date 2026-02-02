import { Suspense, useEffect, useState } from "react";
import { Environment } from "@react-three/drei";
import ProductModel from "./ProductModel";
import SceneLoader from "./SceneLoader";
import { useIsMobile } from "@/hooks/isMobile";

type Props = {
  index: number;
};

export default function SceneContent({ index }: Props) {
  const isMobile = useIsMobile();
  const [layout, setLayout] = useState({
    position: [0, -0.4, 0] as [number, number, number],
    zoom: 1.5,
  });

  useEffect(() => {
    setLayout({
      position: !isMobile ? (index === 0 ? [2, -0.6, 0] : [-2, -0.6, 0]) : index === 0 ? [0, -0.4, 0] : [0, -0.4, 0],
      zoom: !isMobile ? 2 : 1.5,
    });
  }, [isMobile, index]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      <directionalLight position={[-4, -2, -5]} intensity={0.5} />

      <Suspense fallback={<SceneLoader />}>
        {isMobile ? (
          <ProductModel
            modelPath={index === 0 ? "/models/ashwagandha-compress.glb" : "/models/safed-musli-compress.glb"}
            position={layout.position}
            zoom={layout.zoom}
          />
        ) : (
          <ProductModel
            modelPath={index === 0 ? "/models/ashwagandha-compress.glb" : "/models/safed-musli-compress.glb"}
            position={layout.position}
            zoom={layout.zoom}
          />
        )}
      </Suspense>
      <Environment preset="warehouse" />
    </>
  );
}

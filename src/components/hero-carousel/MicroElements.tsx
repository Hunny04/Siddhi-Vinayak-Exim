"use client";

import { InstancedMesh, Object3D, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  model: string;
  active: boolean;
};

const COUNT = 60;

export default function MicroElements({ model, active }: Props) {
  const ref = useRef<InstancedMesh>(null);
  const dummy = new Object3D();
  const { scene } = useGLTF(model);

  // ✅ Safely find a Mesh
  const mesh = scene.children.find((child): child is Mesh => (child as Mesh).isMesh);

  useEffect(() => {
    if (!ref.current || !mesh) return;

    for (let i = 0; i < COUNT; i++) {
      dummy.position.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 2);

      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      dummy.scale.setScalar(Math.random() * 0.4 + 0.2);
      dummy.updateMatrix();

      ref.current.setMatrixAt(i, dummy.matrix);
    }

    ref.current.instanceMatrix.needsUpdate = true;
  }, [mesh]);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current.scale, {
      x: active ? 1 : 0,
      y: active ? 1 : 0,
      z: active ? 1 : 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(ref.current.position, {
      z: active ? 0 : -4,
      duration: 1,
      ease: "power3.inOut",
    });
  }, [active]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.0005;
    }
  });

  if (!mesh) return null;

  return <instancedMesh ref={ref} args={[mesh.geometry, mesh.material, COUNT]} />;
}

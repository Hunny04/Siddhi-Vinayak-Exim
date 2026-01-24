"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";

export default function SmallModels({ modelPath }: { modelPath: string }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  const positions = [
    {
      x: 1.9371971874769862,
      y: -1.5948303147361658,
      z: -0.1687267754698163,
      speed: 0.008561543784758784,
      //   bottom right
    },
    {
      x: 1.850544690379078,
      y: 1.0169898659085388,
      z: 0.11812436672348636,
      speed: 0.0122367369723069,
      //   top right
    },
    {
      x: 0.07784536403334452,
      y: 1.0950196445378651,
      z: 0.10333177639669588,
      speed: 0.0102365123075466,
      //   top center
    },
    {
      x: -1.9388013507971846,
      y: 0.8849928480225187,
      z: 0.5758905830192402,
      speed: 0.0078074683516583705,
      //   top left
    },
    {
      x: -1.3555231520500485,
      y: -0.24054154554576312,
      z: 0.36004852387484587,
      speed: 0.012707840334016045,
      //   center left
    },
    {
      x: -1.8713232713521386,
      y: -1.47642787692571273,
      z: -0.46755518957007824,
      speed: 0.01106476264305345,
      //   bottom left
    },
    {
      x: 1.671686796481406,
      y: -0.06321120217370657,
      z: 0.3121485964629247,
      speed: 0.0119107764070621,
      //   center right
    },
  ];

  useFrame(() => {
    if (!group.current) return;

    group.current.children.forEach((child, i) => {
      child.rotation.y += positions[i].speed;
      //   child.rotation.x += positions[i].speed * 0.6;
      child.position.y += Math.sin(Date.now() * 0.001 + i) * 0.0009;
    });
  });

  return (
    <group ref={group} scale={1}>
      {positions.map((p, i) => (
        <primitive key={i} object={scene.clone()} position={[p.x, p.y, p.z]} scale={0.35} />
      ))}
    </group>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import ProductScene from "./ProductScene";
import clsx from "clsx";
import { gsap } from "gsap";

const products = [
  {
    name: "ASHWAGANDHA",
    leftTitle: "Natural Adaptogen",
    leftDesc: "Boosts strength, immunity, and stress resistance.",
    rightBadge: "Export Grade",
  },
  {
    name: "SAFED MUSLI",
    leftTitle: "Vitality Enhancer",
    leftDesc: "Traditionally used for energy and stamina.",
    rightBadge: "Premium Quality",
  },
];

export default function Hero3D() {
  const [index, setIndex] = useState(0);

  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
  }, [index]);

  return (
    <section className="relative h-screen overflow-hidden bg-[#eef3f8]">
      {/* BIG BACK TEXT */}
      {/* <h1
        className="pointer-events-none absolute inset-0 flex items-center justify-center
        text-[18vw] font-extrabold tracking-widest text-black/5">
        {products[index].name}
      </h1> */}

      <h1
        ref={textRef}
        className="bg-text absolute inset-0 flex items-center justify-center
  text-[18vw] font-extrabold tracking-widest text-black/5 select-none">
        {products[index].name}
      </h1>

      {/* 3D CENTER */}
      <div className="absolute inset-0 z-10">
        <ProductScene index={index} />
      </div>

      {/* LEFT CARD */}
      <div
        className="absolute left-20 top-1/2 -translate-y-1/2 z-20 w-72
        rounded-2xl bg-white p-6 shadow-xl transition-all">
        <h3 className="text-lg font-semibold">{products[index].leftTitle}</h3>
        <p className="mt-2 text-sm text-gray-600">{products[index].leftDesc}</p>
      </div>

      {/* RIGHT CARD */}
      <div
        className="absolute right-20 top-1/2 -translate-y-1/2 z-20
        rounded-2xl bg-white px-6 py-4 shadow-xl">
        <p className="text-sm text-gray-500">Quality</p>
        <p className="text-lg font-semibold">{products[index].rightBadge}</p>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex gap-6">
        <button
          onClick={() => setIndex(0)}
          className={clsx("h-3 w-3 rounded-full", index === 0 ? "bg-black" : "bg-black/30")}
        />
        <button
          onClick={() => setIndex(1)}
          className={clsx("h-3 w-3 rounded-full", index === 1 ? "bg-black" : "bg-black/30")}
        />
      </div>
    </section>
  );
}

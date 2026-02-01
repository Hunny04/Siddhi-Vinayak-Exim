"use client";

import { useEffect, useState } from "react";
import ProductScene from "./ProductScene";
import clsx from "clsx";
import Image from "next/image";

const products = [
  {
    name: "ASHWAGANDHA",
    desc: "ROOTS & POWDER",
    bgImage: "/images/ash-roots-hero.png",
  },
  {
    name: "SAFED MUSLI",
    desc: "ROOTS & POWDER",
    bgImage: "/images/safed-musli-hero.png",
  },
];

export default function Hero3D() {
  const [index, setIndex] = useState(0);

  // autoscroll products
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#eef3f8]">
      {/* BIG BACKGROUND TEXT */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center z-0  bg-[#214d3b]/80">
        <Image src={products[index]?.bgImage} alt="ash-roots" fill className="object-cover" />
        <div className="bg-black w-full h-full absolute inset-0 opacity-25"></div>
        <div
          className="bg-white w-full absolute bottom-0 min-h-[35vh] px-10 py-4 lg:py-8 lg:px-36 text-[#214d3b]"
          style={{
            textAlign: index === 0 ? "left" : "right",
          }}>
          <h1 className="font-[Faible] text-5xl lg:text-7xl font-bold">{products[index].name}</h1>
          <h1 className="font-[Faible] text-xl lg:text-3xl">{products[index].desc}</h1>
        </div>
      </div>

      {/* 3D CENTER */}
      <div className="absolute inset-0 z-10">
        <ProductScene index={index} />
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

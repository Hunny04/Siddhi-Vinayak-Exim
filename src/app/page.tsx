"use client";
import AgricultureHero from "@/components/AgricultureHero";
import CompanyOverview from "@/components/CompanyOverview";
import FreshProducts from "@/components/FreshProducts";
import Hero3D from "@/components/hero-carousel/Hero3D";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import WhatWeDo from "@/components/WhatWeDo";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/ashwagandha.glb");
useGLTF.preload("/models/safed_musli.glb");

export default function Home() {
  return (
    <div className="min-h-[150vh] bg-zinc-50 dark:bg-black">
      <Hero3D />
      <CompanyOverview />
      <WhatWeDo />
      <FreshProducts />
      <AgricultureHero />
      <ProjectsCarousel />
      {/* <OfficeAndCertificates /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

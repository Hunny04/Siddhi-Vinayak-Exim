"use client";
import AgricultureHero from "@/components/AgricultureHero";
import CompanyOverview from "@/components/CompanyOverview";
import ContactUs from "@/components/contact";
import FreshProducts from "@/components/FreshProducts";
import Hero3D from "@/components/hero-carousel/Hero3D";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import SplashScreen from "@/components/SplashScreen";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <SplashScreen>
      <div className="min-h-[150vh] bg-zinc-50 dark:bg-black">
        <Hero3D />
        <CompanyOverview />
        <WhatWeDo />
        <FreshProducts />
        <ProjectsCarousel />
        <AgricultureHero />
        <ContactUs />
        {/* <OfficeAndCertificates /> */}
        {/* <ContactUs /> */}
      </div>
    </SplashScreen>
  );
}

import AgricultureHero from "@/components/AgricultureHero";
import CompanyOverview from "@/components/CompanyOverview";
import ContactUs from "@/components/ContactUs";
import FreshProducts from "@/components/FreshProducts";
import HeroSection from "@/components/hero";
import OfficeAndCertificates from "@/components/OfficeAndCertificates";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className="min-h-[150vh] bg-zinc-50 dark:bg-black">
      <HeroSection />
      <CompanyOverview />
      <WhatWeDo />
      <FreshProducts />
      <AgricultureHero />
      {/* <OfficeAndCertificates /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

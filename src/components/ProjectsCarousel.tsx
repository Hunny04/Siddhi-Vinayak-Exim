"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Certificate = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function ProjectsCarousel() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  // FETCH CERTIFICATES
  useEffect(() => {
    const fetchCertificates = async () => {
      const { data } = await supabase.from("certificates").select("*").order("created_at", { ascending: false });

      if (data) setCertificates(data);
    };

    fetchCertificates();
  }, []);

  return (
    <section className="bg-[#214d3b] pb-24 pt-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-white/70 mb-3">QUALITY YOU CAN TRUST</p>
          <h2 className="text-4xl md:text-5xl font-campuni font-black">
            <span className="text-[#f1c46b]">Explore Our </span>
            <span className="text-white">Certificate</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full">
          <CarouselContent className="md:ml-6">
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="pl-6 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[32%]">
                <div className="relative h-105 rounded-3xl overflow-hidden group">
                  {/* IMAGE */}
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 32vw"
                    quality={80}
                    className="object-cover object-top"
                  />
                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs tracking-widest text-[#f1c46b] mb-2">Certificate of</p>
                    <h3 className="text-xl font-campuni font-bold leading-snug">{cert.title}</h3>

                    {/* ARROW */}
                    <Link href="/certificates">
                      <div className="mt-4 w-9 h-9 rounded-full border border-[#f1c46b] flex items-center justify-center group-hover:bg-[#f1c46b] transition">
                        <span className="text-[#f1c46b] group-hover:text-black text-lg">→</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* NAVIGATION */}
          <CarouselPrevious className="left-0 bg-white/10 text-white hover:bg-white/20 border-none" />
          <CarouselNext className="right-0 bg-white/10 text-white hover:bg-white/20 border-none" />
        </Carousel>
      </div>
    </section>
  );
}

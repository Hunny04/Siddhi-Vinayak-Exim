"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

const projects = [
  {
    image: "/images/certificates/udyam-registration.png",
    title: "Udhyam Registration",
    tag: "Cerificate of",
  },
  {
    image: "/images/certificates/gst.png",
    title: "GST Registration",
    tag: "Cerificate of",
  },
  {
    image: "/images/certificates/import-export.png",
    title: "Import Export License",
    tag: "Cerificate of",
  },
];

export default function ProjectsCarousel() {
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
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-6 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[32%]">
                <div className="relative h-105 rounded-3xl overflow-hidden group">
                  {/* IMAGE */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs tracking-widest text-[#f1c46b] mb-2">{project.tag}</p>
                    <h3 className="text-xl font-campuni font-bold leading-snug">{project.title}</h3>

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

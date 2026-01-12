"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Natural Way Of Agriculture",
    tag: "AGRICULTURE",
  },
  {
    image: "/images/project-2.png",
    title: "Natural Way Of Agriculture",
    tag: "AGRICULTURE",
  },
  {
    image: "/images/project-3.jpg",
    title: "Natural Way Of Agriculture",
    tag: "AGRICULTURE",
  },
  {
    image: "/images/project-1.jpg",
    title: "Natural Way Of Agriculture",
    tag: "AGRICULTURE",
  },
  {
    image: "/images/project-3.jpg",
    title: "Natural Way Of Agriculture",
    tag: "AGRICULTURE",
  },
];

export default function ProjectsCarousel() {
  return (
    <section className="bg-[#214d3b] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-white/70 mb-3">RECENTLY COMPLETED WORK</p>
          <h2 className="text-4xl md:text-5xl font-campuni font-black">
            <span className="text-[#f1c46b]">Explore Our </span>
            <span className="text-white">Projects</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full">
          <CarouselContent className="-ml-6">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-6 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[30%]">
                <div className="relative h-105 rounded-3xl overflow-hidden group">
                  {/* IMAGE */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs tracking-widest text-[#f1c46b] mb-2">{project.tag}</p>
                    <h3 className="text-xl font-campuni font-bold leading-snug">{project.title}</h3>

                    {/* ARROW */}
                    <div className="mt-4 w-9 h-9 rounded-full border border-[#f1c46b] flex items-center justify-center group-hover:bg-[#f1c46b] transition">
                      <span className="text-[#f1c46b] group-hover:text-black text-lg">→</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* NAVIGATION */}
          <CarouselPrevious className="left-0 bg-white/10 text-white hover:bg-white/20 border-none" />
          <CarouselNext className="right-0 bg-white/10 text-white hover:bg-white/20 border-none" />
        </Carousel>

        {/* PAGINATION DOTS (FAKE but EXACT LOOK) */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-6 h-2 rounded-full bg-[#f1c46b]" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}

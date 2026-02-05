"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const products = [
  {
    name: "ASHWAGANDHA",
    desc: "ROOTS & POWDER",
    bgImage: "/images/ash-roots-hero.png",
    bowlImage: "/images/ashwagandha-hero-bowl.png",
  },
  {
    name: "SAFED MUSLI",
    desc: "ROOTS & POWDER",
    bgImage: "/images/safed-musli-hero.png",
    bowlImage: "/images/safed-musli-hero-bowl.png",
  },
];

export default function Hero3D() {
  return (
    <section className="overflow-hidden bg-[#eef3f8]">
      <Carousel
        plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
        opts={{
          loop: true,
        }}>
        <CarouselContent>
          {products?.map((product, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full bg-cover bg-center rounded-none shadow-lg md:h-screen h-[70vh] bg-[#eef3f8]"
                style={{ backgroundImage: `url(${product.bgImage})` }}>
                <div className="absolute bottom-0 left-0 w-full bg-white h-2/5">
                  <div className="relative w-full h-full flex items-start justify-start px-8 py-16">
                    <div className="text-start text-[#214d3b]">
                      <h2 className="text-5xl font-campuni font-bold font-[Campuni]">{product.name}</h2>
                      <p className="text-3xl tracking-widest mt-2 font-[Faible]">{product.desc}</p>
                    </div>
                    <img
                      src={product.bowlImage}
                      alt={`${product.name} bowl`}
                      className="w-md object-contain absolute -top-40 -right-40 transform -translate-x-1/2"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
    </section>
  );
}

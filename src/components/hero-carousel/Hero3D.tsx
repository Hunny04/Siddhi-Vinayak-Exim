"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/isMobile";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const products = [
  {
    name: "ASHWAGANDHA",
    desc: "ROOTS & POWDER",
    bgImage: "/images/ash-roots-hero.png",
    bowlImage: "/images/ashwagandha.png",
  },
  {
    name: "SAFED MUSLI",
    desc: "ROOTS & POWDER",
    bgImage: "/images/safed-musli-hero.png",
    bowlImage: "/images/safed-musli.png",
  },
];

export default function Hero3D() {
  const isMobile = useIsMobile(768);
  const isTab = useIsMobile(1024);

  return (
    <section className="overflow-hidden bg-[#eef3f8]">
      <Carousel
        // plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
        opts={{
          loop: true,
        }}>
        <CarouselContent>
          {products?.map((product, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full md:h-screen h-[70vh]">
                <Image
                  src={product.bgImage}
                  alt={product.name}
                  fill
                  priority
                  quality={70}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: index % 2 == 0 ? "top left" : "top right",
                  }}
                />

                <div className="absolute bottom-0 left-0 w-full bg-white h-2/5">
                  <div
                    className="relative w-full h-full flex items-end md:items-start justify-center md:justify-start px-6 py-8 md:px-8 md:py-16"
                    style={{
                      flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    }}>
                    <div className="text-center md:text-start text-[#214d3b]">
                      <h2 className="text-4xl md:text-5xl font-campuni font-bold font-[Campuni]">{product.name}</h2>
                      <p className="text-xl md:text-3xl tracking-widest mt-2 font-[Faible]">{product.desc}</p>
                    </div>
                    <div
                      className="bg-[#214d3b] p-8 rounded-full flex items-center justify-center absolute -top-28 md:-top-40 right-1/2 md:-right-40 transform translate-x-1/2 md:-translate-x-1/2 w-52 md:w-sm lg:w-md "
                      style={{
                        top: isMobile ? "-8rem" : isTab ? "-12rem" : "-13rem",
                        right: index % 2 === 0 ? (isMobile ? "50%" : isTab ? "3rem" : "7rem") : "auto",
                        left: index % 2 === 0 ? "auto" : isMobile ? "0%" : isTab ? "3rem" : "7rem",
                        transform: isMobile ? "unset" : "translateX(50%)",
                      }}>
                      <Image
                        src={product.bowlImage}
                        alt={`${product.name} bowl`}
                        width={400}
                        height={400}
                        quality={80}
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 600px"
                        priority
                        className="w-full object-contain rotate-360"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

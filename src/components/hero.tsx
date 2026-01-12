import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const HeroSection = () => {
  const data = [
    {
      src: "/images/GROUNDNUTS.jpg",
      title: "GROUNDNUTS",
      desc: "GROUNDNUTS A peanut, also known as a groundnut or goober, is a legume crop grown mainly for its edible seeds Botanical Name: Arachis Hypogaea Common Name: Groundnut, Peanut PACKING 500gm, 1kg, 5kg, 10kg, 25kg, 50kg AVAILABILITY In India it is mainly harvested in October - November SPECIFICATIONS Origin: Gujarat, India Moisture: Max. 8% Admixture: Max. 1% Broken & split: Max. 1% Damage & imperfect: Max. 1% Foreign matter: 0. 5%…",
    },
    {
      src: "/images/SESAMESEEDS.jpg",
      title: "SESAME SEEDS",
      desc: "SESAME SEEDS Sesame is a flowering plant in the genus Sesamum, also called benne. Numerous wild relatives occur in Africa and a smaller number in India. Botanical Name: Sesamum Indicum Common Name: Sesame, Till PACKING 500gm, 1kg, 5kg, 10kg, 25kg, 50kg AVAILABILITY In India it is mainly harvested in February – March NATURAL SESAME SEEDS Types White Seeds Dark ColouredSeeds Admixture Oil Content FFA Moisture 99/1/1 95% Min 5% Max…",
    },
    {
      src: "/images/CORIANDERSEEDS.jpg",
      title: "CORIANDER SEEDS",
      desc: "CORIANDER SEEDS Coriander Seeds (Dhania) have a distinctive aroma and taste, that helps in enhancing the taste of a cuisine, when added. Coriander seeds are ground into a fine powder, which is then used to give flavor to the food items. Botanical Name: Coriandrum Sativum Common Name: Coriander, Dhana PACKING 500gm, 1kg, 5kg, 10kg, 25kg, 50kg AVAILABILITY In India it is mainly harvested in February - March SPECIFICATIONS EAGLE QUALITY…",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        duration: 25,
      }}
      className="w-full">
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="relative w-full h-screen">
              <Image
                src={item.src}
                alt={item.title}
                width={1920}
                height={1080}
                className="w-full h-screen rounded-none object-cover opacity-85"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 text-white p-6 rounded-md w-[80vw] text-center">
                <h2 className="text-6xl text-[56px] font-bold mb-4">{item.title}</h2>
                <div className="bg-[#F88C00] h-0.5 w-44 mx-auto my-5"></div>
                <p className="text-lg">{item.desc}</p>
                <button className="py-2.5 px-9 bg-[#F88C00] mt-10">Know More</button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-10" />
      <CarouselNext className="right-10" />
    </Carousel>
  );
};

export default HeroSection;

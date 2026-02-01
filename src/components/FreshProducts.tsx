import { products } from "@/data/products";
import LogoLoop from "./LogoLoop";
import Link from "next/link";

export default function FreshProducts() {
  return (
    <section className="relative bg-[#214d3b] md:pt-0 pt-24 pb-20 overflow-hidden">
      {/* subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-size-[24px_24px]" />

      <div className="relative mx-auto text-center">
        {/* HEADING */}
        <h2 className="font-campuni text-3xl md:text-5xl text-[#f1c46b] mb-10 leading-relaxed font-[Kgi]">
          Healthy Life With
          <br />
          <span className="block mt-2">Fresh Products</span>
        </h2>

        {/* PRODUCT CARDS */}
        <div className="flex flex-wrap justify-center gap-8">
          <LogoLoop
            logos={products.map((item, index) => {
              return {
                node: (
                  <Link href={item.slug ? `/products/${item.slug}` : "#"} key={index}>
                    <div
                      key={index}
                      className={`w-48 h-36 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur text-white hover:bg-[#f1c46b] hover:text-black hover:shadow-2xl`}>
                      {/* IMAGE */}
                      <div className="w-20 h-20 mb-4 flex items-center justify-center">
                        <img src={item.iconImage} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>

                      {/* LABEL */}
                      <p className={`text-sm font-faible font-medium text-center px-2 leading-snug`}>{item.name}</p>
                    </div>
                  </Link>
                ),
              };
            })}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
            className="overflow-visible"
          />
        </div>
      </div>
    </section>
  );
}

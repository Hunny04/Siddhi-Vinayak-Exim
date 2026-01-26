import Link from "next/link";

export const services = [
  {
    title: "Ashwagandha",
    secondTitle: "(Whole Roots)",
    description: "Premium whole roots of Ashwagandha (Withania somnifera), valued for high Withanolide content.",
    image: "/images/ashwagandha.png",
    link: "/products/ashwagandha",
  },
  {
    title: "Ashwagandha Powder",
    secondTitle: "",
    description: "Finely ground Ashwagandha root powder rich in Withanolides and natural minerals.",
    image: "/images/ashwagandha-powder.png",
    link: "/products/ashwagandha-powder",
  },
  {
    title: "Safed Musli",
    secondTitle: "(Whole Roots)",
    description: "Rare Safed Musli (Chlorophytum borivilianum) whole roots, known as 'White Gold'.",
    image: "/images/safed-musli.png",
    link: "/products/safed-musli",
  },
  {
    title: "Safed Musli Powder",
    description:
      "Traditionally consumed as a daily health tonic to improve energy, reproductive wellness, joint health, and immune strength.",
    image: "/images/safed-musli-powder.png",
    link: "/products/safed-musli-powder",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#eef1ed] pt-24 pb-6">
      {/* DARK GREEN BOTTOM STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-[#214d3b]" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xl font-bold tracking-widest text-[#214d3b] uppercase mb-3 font-[Faible]">What We Do</p>

          <h2 className="text-4xl md:text-5xl font-campuni font-black font-[Campuni]">
            <span className="text-[#f1c46b]">Providing Fresh </span>
            <span className="text-[#1f2937]">Organic Food</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-4 gap-8 font-[Campuni]">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md px-4 pt-6 pb-6 text-start hover:shadow-xl transition flex flex-col justify-between">
              <div>
                {/* IMAGE CIRCLE */}
                <div className="w-36 h-36 mx-auto rounded-full bg-[#f1c46b] flex items-center justify-center mb-6">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-campuni font-bold text-[#1f2937] text-center">{item.title}</h3>

                {/* SECOND TITLE */}
                <h3 className="text-xl font-campuni font-bold text-[#1f2937] mb-3 text-center">
                  {item.secondTitle || <br />}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm font-faible text-gray-600 leading-relaxed font-[Poppins]">{item.description}</p>
              </div>

              <div>
                <Link href="/inquire">
                  <button className="w-full py-2 px-4 bg-transparent hover:bg-[#f1c46b] border-4 border-[#f1c46b] transition-all duration-300 rounded-md mt-2 cursor-pointer">
                    Get Quote
                  </button>
                </Link>
                <Link href={item.link}>
                  {" "}
                  <button className="w-full py-2 px-4 bg-transparent hover:bg-[#f1c46b] border-4 border-[#f1c46b] transition-all duration-300 rounded-md mt-2 cursor-pointer">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="bg-[#f1c46b] text-[#214d3b] font-bold py-2 px-4 mt-6 mx-auto rounded-lg shadow-lg transition">
          View All
        </button> */}
      </div>
    </section>
  );
}

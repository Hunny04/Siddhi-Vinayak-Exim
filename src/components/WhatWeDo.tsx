export const services = [
  {
    title: "Ashwagandha",
    secondTitle: "(Whole Roots)",
    description:
      "Premium whole roots of Ashwagandha (Withania somnifera), valued for high Withanolide content. Traditionally used to manage stress, boost stamina, and support brain health.",
    image: "/images/ashwagandha.png",
  },
  {
    title: "Ashwagandha Powder",
    description:
      "Finely ground Ashwagandha root powder rich in Withanolides and natural minerals. Supports stress relief, muscle recovery, better sleep, and mental focus. Commonly mixed with warm milk, honey, or smoothies.",
    image: "/images/ashwagandha-powder.png",
  },
  {
    title: "Safed Musli",
    secondTitle: "(Whole Roots)",
    description:
      "Rare Safed Musli (Chlorophytum borivilianum) whole roots, known as 'White Gold'. Naturally rich in saponins and polysaccharides, used to enhance vitality, immunity, and overall physical strength.",
    image: "/images/safed-musli.png",
  },
  {
    title: "Safed Musli Powder",
    description:
      "Pure Safed Musli powder with high saponin content. Traditionally consumed as a daily health tonic to improve energy, reproductive wellness, joint health, and immune strength.",
    image: "/images/safed-musli-powder.png",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#eef1ed] pt-24 pb-32">
      {/* DARK GREEN BOTTOM STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-[#214d3b]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xl font-bold tracking-widest text-[#214d3b] uppercase mb-3 font-[Faible]">What We Do</p>

          <h2 className="text-4xl md:text-5xl font-campuni font-black font-[Campuni]">
            <span className="text-[#f1c46b]">Providing Fresh </span>
            <span className="text-[#1f2937]">Organic Food</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-[Campuni]">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md px-6 pt-8 pb-10 text-start hover:shadow-xl transition">
              {/* IMAGE CIRCLE */}
              <div className="w-36 h-36 mx-auto rounded-full bg-[#f1c46b] flex items-center justify-center mb-6">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-campuni font-bold text-[#1f2937] text-center">{item.title}</h3>

              {/* SECOND TITLE */}
              <h3 className="text-xl font-campuni font-bold text-[#1f2937] mb-3 text-center">{item.secondTitle}</h3>

              {/* DESCRIPTION */}
              <p className="text-sm font-faible text-gray-600 leading-relaxed font-[Poppins]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

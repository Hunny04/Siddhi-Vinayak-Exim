const products = [
  {
    name: "Ashwagandha",
    image: "/images/ashwagandha-icon.png",
  },
  {
    name: "Ashwagandha Powder",
    image: "/images/ashwagandha-powder-icon.png",
  },
  {
    name: "Safed Musli",
    image: "/images/safed-musli-icon.png",
  },
  {
    name: "Safed Musli Powder",
    image: "/images/safed-musli-powder-icon.png",
  },
];

export default function FreshProducts() {
  return (
    <section className="relative bg-[#214d3b] py-24 overflow-hidden">
      {/* subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-size-[24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="font-campuni text-5xl md:text-6xl text-[#f1c46b] mb-20 leading-relaxed font-[Kgi]">
          Healthy Life With
          <br />
          <span className="block mt-2">Fresh Products</span>
        </h2>

        {/* PRODUCT CARDS */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className={`w-44 h-44 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur text-white hover:bg-[#f1c46b] hover:text-black hover:shadow-2xl`}>
              {/* IMAGE */}
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>

              {/* LABEL */}
              <p className={`text-sm font-faible font-medium text-center px-2 leading-snug`}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AgricultureHero() {
  return (
    <section className="relative bg-[#eef2ee] pb-40">
      {/* HERO IMAGE */}
      <div
        className="relative h-105 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero-farm.jpg')",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
        <div className="relative text-center px-6">
          <h2 className="text-3xl md:text-5xl font-campuni font-black text-white leading-tight">
            <span className="text-[#f1c46b]">Agriculture Matters</span> to <br />
            the Future of Bangladesh
          </h2>

          {/* PLAY BUTTON */}
          <button className="mt-8 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition">
            <span className="ml-1 text-xl">▶</span>
          </button>
        </div>
      </div>

      {/* FLOATING CARDS */}
      <div className="relative max-w-7xl mx-auto px-6 -mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Agriculture Products</p>
            <img src="/images/card-agriculture.jpg" alt="Agriculture Products" className="w-full h-56 object-cover" />
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Organic Farming</p>
            <img src="/images/card-organic.jpg" alt="Organic Farming" className="w-full h-56 object-cover" />
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Quality Standards</p>
            <img src="/images/card-quality.jpg" alt="Quality Standards" className="w-full h-56 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

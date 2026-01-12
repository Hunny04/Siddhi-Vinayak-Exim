export default function AgricultureHero() {
  return (
    <section className="relative bg-[#eef2ee] pb-40">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/farm.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative text-center px-6">
          <h2 className="text-3xl md:text-5xl font-campuni font-black text-white leading-tight">
            <span className="text-[#f1c46b]">Agriculture Matters</span> to <br />
            the Future of India
          </h2>

          {/* PLAY BUTTON */}
          {/* <button className="mt-8 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition">
            <span className="ml-1 text-xl">▶</span>
          </button> */}
        </div>
      </div>

      {/* FLOATING CARDS */}
      <div className="relative max-w-7xl mx-auto px-6 -mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Agriculture Products</p>
            <img src="/images/agri1.png" alt="Agriculture Products" className="w-full h-56 object-cover" />
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Organic Farming</p>
            <img src="/images/agri2.png" alt="Organic Farming" className="w-full h-56 object-cover" />
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Quality Standards</p>
            <img src="/images/agri3.png" alt="Quality Standards" className="w-full h-56 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

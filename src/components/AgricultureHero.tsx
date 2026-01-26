export default function AgricultureHero() {
  return (
    <section className="relative bg-white pb-0">
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
            Why Choose <span className="text-[#f1c46b]">Us ?</span>
          </h2>
          <h4 className="text-3xl md:text-3xl font-[Faible] text-white leading-tight">
            Growing <span className="text-[#f1c46b]">Quality</span>, Delivering{" "}
            <span className="text-[#f1c46b]">Trust</span>
          </h4>

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
            <p className="text-center font-campuni font-bold py-4">Direct Sourcing</p>
            <div className="relative group">
              <img src="/images/agri1.png" alt="Direct Sourcing" className="w-full h-56 object-cover" />
              <div className="group-hover:opacity-100 opacity-0 flex bg-black/70 absolute inset-0 items-center justify-center transition-all duration-300">
                <p className="text-center text-lg font-bold font-[Faible] py-4 text-white px-6">
                  No middlemen. <br />
                  We know exactly where <br /> our herbs are grown.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Farmer's Integrity</p>
            <div className="relative group">
              <img src="/images/agri3.png" alt="Farmer's Integrity" className="w-full h-56 object-cover" />
              <div className="group-hover:opacity-100 opacity-0 flex bg-black/70 absolute inset-0 items-center justify-center transition-all duration-300">
                <p className="text-center text-lg font-bold font-[Faible] py-4 text-white px-6">
                  Our reputation is built on <br /> the hard work of our ancestors. <br /> We deliver what we promise.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <p className="text-center font-campuni font-bold py-4">Strict Quality Control</p>
            <div className="relative group">
              <img src="/images/agri2.png" alt="Strict Quality Control" className="w-full h-56 object-cover" />
              <div className="group-hover:opacity-100 opacity-0 flex bg-black/70 absolute inset-0 items-center justify-center transition-all duration-300">
                <p className="text-center text-lg font-bold font-[Faible] py-4 text-white px-6">
                  Each batch is tested <br /> for moisture content <br /> and purity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AshwagandhaProduct() {
  return (
    <section className="bg-[#F7F3EE] py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#46563F] mb-3">Ashwagandha (Withania somnifera)</h1>
          <p className="text-lg text-[#5F6F52] font-medium">Indian Ginseng · Prince of Herbs</p>
          <p className="mt-4 text-[#6F756A]">
            A powerful adaptogenic herb rooted in Ayurveda and trusted globally for stress management, strength, and
            vitality.
          </p>
        </div>

        {/* WHAT IT IS */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-[#46563F] mb-4">What It Is</h2>
            <p className="text-[#6F756A] leading-relaxed">
              Ashwagandha has been used for over 3,000 years in Ayurvedic medicine. Known for its adaptogenic
              properties, it helps the body manage stress, restore balance, and enhance physical and mental performance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#D8DCCF]">
            <h3 className="text-lg font-semibold text-[#46563F] mb-4">Key Bioactive Compounds</h3>
            <ul className="space-y-3 text-[#6F756A]">
              <li>
                <strong>Withanolides:</strong> Core stress-reducing compounds
              </li>
              <li>
                <strong>Alkaloids & Saponins:</strong> Anti-inflammatory support
              </li>
              <li>
                <strong>Minerals:</strong> Iron, Calcium, Magnesium
              </li>
            </ul>
          </div>
        </div>

        {/* BENEFITS */}
        <div>
          <h2 className="text-2xl font-semibold text-[#46563F] mb-6 text-center">Health Benefits</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Stress & Anxiety", "Helps reduce cortisol and promotes calmness."],
              ["Physical Performance", "Improves stamina, muscle strength, recovery."],
              ["Brain Health", "Supports memory, focus, and sleep quality."],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-[#D8DCCF]">
                <h3 className="font-semibold text-[#46563F] mb-2">{title}</h3>
                <p className="text-[#6F756A] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* USAGE */}
        <div className="bg-white rounded-2xl p-8 border border-[#D8DCCF]">
          <h2 className="text-2xl font-semibold text-[#46563F] mb-6">Usage & Applications</h2>

          <div className="grid md:grid-cols-2 gap-6 text-[#6F756A]">
            <div>
              <h4 className="font-medium text-[#46563F]">Whole Roots</h4>
              <p className="text-sm">Used by manufacturers for premium extracts and traditional tonics.</p>
            </div>
            <div>
              <h4 className="font-medium text-[#46563F]">Powder</h4>
              <p className="text-sm">Used in capsules, smoothies, warm milk, or honey blends.</p>
            </div>
          </div>
        </div>

        {/* QUALITY */}
        <div className="text-center">
          <p className="text-[#5F6F52] font-medium">
            ✔ Farm-level sourcing · ✔ Clean processing · ✔ Export-grade purity
          </p>
          <p className="mt-2 text-[#6F756A] italic">“Purity a farmer can promise.”</p>
        </div>
      </div>
    </section>
  );
}

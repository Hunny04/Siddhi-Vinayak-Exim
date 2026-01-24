import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative bg-[#f5f7f4] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1F4D3A] mb-4">About Siddhi Vinayak Exim</h1>
          <p className="text-gray-600 leading-7">
            Your bridge for premium agro products in global trade. Providing export solutions with trust, transparency,
            and excellence.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {[
            { title: "100+ Clients", icon: "👥" },
            { title: "Premium Quality", icon: "🏆" },
            { title: "Global Reach", icon: "🌍" },
            { title: "Years of Experience", icon: "⏳" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F2C66D] text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#1F4D3A]">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Trusted partnerships and consistent performance across markets.
              </p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-[#1F4D3A] mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quality Products", icon: "🌱" },
              { title: "Experienced Team", icon: "👨‍🌾" },
              { title: "Proven Track Record", icon: "📈" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F2C66D] text-white flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#1F4D3A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Committed to consistency, compliance, and customer satisfaction.
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-12 inline-flex items-center gap-2 bg-[#F2C66D] text-[#1F4D3A] px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Request a Quote →
          </button>
        </div>
      </div>
    </section>
  );
}

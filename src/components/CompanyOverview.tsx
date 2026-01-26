import React from "react";

const AgricultureIntro = () => {
  return (
    <section className="w-full bg-white pt-0 pb-20 font-poppins">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE AREA */}
        <div className="relative flex justify-center">
          {/* Main Big Circle */}
          <div className="relative w-105 h-105 rounded-full border-[6px] border-white overflow-hidden">
            <img src="/images/farming-main.png" alt="Organic Farming" className="w-full h-full object-cover" />
          </div>

          {/* Top Small Circle */}
          <div className="absolute -top-6 left-20 w-36 h-36 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg">
            <img src="/images/soil.jpg" alt="Soil" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Small Circle */}
          <div className="absolute -bottom-4 right-16 w-36 h-36 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg">
            <img src="/images/planting.jpg" alt="Planting" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-xl font-[Faible] font-semibold tracking-widest text-green-700 uppercase mb-4">
            Our Introduction
          </p>

          <h2 className="text-4xl font-extrabold leading-tight mb-6 font-[Campuni]">
            <span className="text-yellow-500">Roots in the soil</span> <br />
            <span className="text-gray-900">Vision For World</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
            Siddhi Vinayak Exim was founded by two sons of the soil. Growing up in a farming family, we learned that
            quality isn't created in a factory—it is nurtured in the field.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
            We aren't just exporters; we are the bridge between the traditional wisdom of Indian farming and the global
            demand for wellness. Because we understand the crop from the seed level, we guarantee a level of purity that
            only a farmer can promise.
          </p>

          {/* CHECK LIST */}
          {/* <ul className="space-y-3 mb-8">
            {["Organic food is vitamin-rich.", "Eat organic, meet demand.", "Organic food isn't irradiated."].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ),
            )}
          </ul> */}

          {/* PROGRESS CIRCLES */}
          <div className="flex gap-10">
            <ProgressCircle value={100} label="Organic Solutions" />
            <ProgressCircle value={100} label="Quality Agriculture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureIntro;

/* ---------------------------------- */
/* PROGRESS CIRCLE COMPONENT */
/* ---------------------------------- */

const ProgressCircle = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          <circle cx="48" cy="48" r="42" stroke="#e5e7eb" strokeWidth="6" fill="none" />
          <circle
            cx="48"
            cy="48"
            r="42"
            stroke="#166534"
            strokeWidth="6"
            fill="none"
            strokeDasharray={2 * Math.PI * 42}
            strokeDashoffset={2 * Math.PI * 42 * (1 - value / 100)}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-800">{value}%</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-gray-700 text-center">{label}</p>
    </div>
  );
};

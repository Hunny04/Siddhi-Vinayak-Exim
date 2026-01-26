import { Sprout, Leaf, Globe, ShieldCheck, Tractor } from "lucide-react";

const sections = [
  {
    title: "From the Fields We Come",
    text: "Founded by two sons of the soil, our journey began in the fields where we learned that quality is nurtured, not manufactured.",
    icon: Sprout,
    side: "left",
  },
  {
    vacant: true,
  },
  {
    vacant: true,
  },
  {
    title: "Understanding the Crop from the Seed",
    text: "Our seed-level knowledge ensures purity, consistency, and authenticity that only farmers can promise.",
    icon: Leaf,
    side: "right",
    className: "-mt-[10px]",
  },
  {
    title: "Bridging Tradition with Global Demand",
    text: "We connect traditional Indian farming wisdom with global wellness needs through ethical sourcing.",
    icon: Globe,
    side: "left",
    className: "-mt-[10px]",
  },
  {
    vacant: true,
  },
  {
    vacant: true,
  },
  {
    title: "Purity a Farmer Can Promise",
    text: "Every batch is carefully selected, naturally processed, and responsibly handled.",
    icon: ShieldCheck,
    side: "right",
    className: "-mt-[10px]",
  },
];

export default function AboutUsOutlinedJourney() {
  return (
    <section className="bg-[#F7F3EE] py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h1 className="text-4xl font-semibold text-[#46563F] mb-10">About Us</h1>
        <h1 className="text-4xl font-semibold text-[#f1c46b] mb-18">LOGO</h1>
        <h1 className="text-4xl font-semibold text-[#46563F] mb-4">Siddhi Vinayak Exim</h1>
        <p className="text-[#f1af2c] text-2xl">Growing Quality, Delivering Trust</p>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto space-y-20 px-4 grid grid-cols-2 gap-0">
        {sections.map((item, i) => {
          const isLeft = item.side === "left";
          const Icon = item.icon;

          if (item.vacant || !Icon) {
            return <div key={i} className="h-32"></div>;
          }

          return (
            <div key={i} className={`relative flex mb-0 w-full ${item.className ? item.className : ""}`}>
              {/* OUTLINED CAPSULE */}
              <div
                className={`relative flex items-center gap-10 border-10 border-[#5F6F52] rounded-[80px] px-14 py-12 w-full`}
                style={{
                  borderTopLeftRadius: isLeft ? "999px" : "0px",
                  borderBottomLeftRadius: isLeft ? "999px" : "0px",
                  borderTopRightRadius: isLeft ? "0px" : "999px",
                  borderBottomRightRadius: isLeft ? "0px" : "999px",
                  borderLeftWidth: isLeft ? "10px" : "0px",
                  borderRightWidth: isLeft ? "0px" : "10px",
                }}>
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#5F6F52] flex items-center justify-center">
                    <Icon size={44} className="text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold text-[#46563F] mb-3">{item.title}</h3>
                  <p className="text-[#6F756A] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

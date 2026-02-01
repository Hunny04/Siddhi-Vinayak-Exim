"use client";
import { useIsMobile } from "@/hooks/isMobile";
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
  const isMobile = useIsMobile();

  return (
    <section
      className="bg-[#F7F3EE]"
      style={{
        background: "url(/images/about-bg.jpg)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100%",
        backgroundPosition: "top",
      }}>
      <div
        className="py-24"
        style={{
          backdropFilter: "blur(10px)",
        }}>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 px-4 flex flex-col items-center relative">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#46563F] mb-10 bg-[#f1c46b] w-fit px-16 py-4 rounded-full">
            About Us
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#f1c46b] mb-10 md:mb-18">LOGO</h1>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#46563F] mb-4">Siddhi Vinayak Exim</h1>
          <p className="text-[#f1af2c] text-lg md:text-2xl mb-2">Growing Quality, Delivering Trust</p>
          <div className="w-68 h-32 md:block hidden rounded-r-full border-r-10 border-b-10 border-[#214d3b] absolute right-28 -bottom-12.5"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto space-y-20 px-4 grid grid-cols-2 gap-0 relative">
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
                  className={`relative flex items-center gap-10 border-10 border-[#214d3b] rounded-[80px] md:px-14 px-5 md:py-12 py-5 w-full`}
                  style={{
                    borderTopLeftRadius: isLeft ? "999px" : "0px",
                    borderBottomLeftRadius: isLeft ? "999px" : "0px",
                    borderTopRightRadius: isLeft ? "0px" : "999px",
                    borderBottomRightRadius: isLeft ? "0px" : "999px",
                    borderLeftWidth: isLeft ? "10px" : "0px",
                    borderRightWidth: isLeft ? "0px" : "10px",
                    flexDirection: isLeft ? "row" : "row-reverse",
                  }}>
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-24 h-24 rounded-full bg-[#5F6F52] flex items-center justify-center">
                      <Icon size={44} className="text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className="about-text-container md:static absolute"
                    style={{
                      left: !isMobile ? 0 : isLeft ? "unset" : "-12rem",
                      right: !isMobile ? 0 : isLeft ? "-12rem" : "unset",
                      textAlign: isLeft ? "left" : "right",
                    }}>
                    <h3 className="text-lg md:text-2xl font-semibold text-[#46563F] mb-3">{item.title}</h3>
                    <p className="text-[#6F756A] leading-relaxed text-xs md:text-base">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="-z-10 w-68 h-32 md:block hidden rounded-l-full border-l-10 border-t-10 border-[#214d3b] absolute left-80 -bottom-29.5"></div>
        </div>
      </div>
    </section>
  );
}

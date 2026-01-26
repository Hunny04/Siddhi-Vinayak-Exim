import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HEADER */}
      <section className="bg-[#2F4F4F] py-20 text-center text-white">
        <h1 className="text-4xl font-semibold">About Us</h1>
      </section>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Discover Our Story — Where Innovation Meets Quality</h2>

        <Image src="/about/hero.jpg" alt="About" width={1100} height={520} className="rounded-xl mx-auto" />
      </section>

      {/* JOURNEY */}
      <section className="bg-[#F6F6F6] py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {[
            {
              title: "From Humble Beginnings",
              text: "We started with a simple mission: deliver quality products with integrity and trust.",
              img: "/about/story1.jpg",
            },
            {
              title: "Milestones & Achievements",
              text: "Over the years, we’ve expanded our reach and built strong partnerships worldwide.",
              img: "/about/story2.jpg",
              reverse: true,
            },
            {
              title: "Innovation & Growth",
              text: "Constant improvement and innovation drive our processes and services.",
              img: "/about/story3.jpg",
            },
            {
              title: "Looking Ahead",
              text: "We continue to evolve while staying rooted in our core values.",
              img: "/about/story4.jpg",
              reverse: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 items-center ${item.reverse ? "md:flex-row-reverse" : ""}`}>
              <Image src={item.img} alt={item.title} width={500} height={320} className="rounded-xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-7">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Awesome Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Amit Verma", "Priya Sharma", "Rohit Singh"].map((name, i) => (
              <div key={i} className="border rounded-xl p-6">
                <Image
                  src={`/team/${i + 1}.jpg`}
                  alt={name}
                  width={260}
                  height={260}
                  className="rounded-lg mx-auto mb-4"
                />
                <h4 className="font-medium">{name}</h4>
                <p className="text-sm text-gray-500">Team Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#2F4F4F] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Don’t take our word — see what clients say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {["Great service!", "Highly professional team."].map((quote, i) => (
              <div key={i} className="bg-white text-slate-800 rounded-xl p-6">
                <p className="mb-4">“{quote}”</p>
                <span className="text-sm text-gray-500">— Client</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {["Fast Shipping", "Easy to Shop", "24/7 Support", "Hassle Free Returns"].map((item, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#F4B740]" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2F4F4F] text-white py-10 text-center">© 2026 Your Company. All Rights Reserved.</footer>
    </main>
  );
}

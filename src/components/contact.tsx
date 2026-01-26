import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* World Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/world-map.png')",
        }}
      />
      {/* <div className="absolute inset-0 bg-black/60" /> */}

      {/* Contact Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center font-campuni">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8 font-[Faible]">We'd love to hear from you. Let's connect.</p>

        <form className="space-y-5 font-campuni">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />

          {/* Contact Number */}
          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />

          {/* Message */}
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#214d3b]/85 hover:bg-[#1b3d2d] text-white font-semibold py-3 transition">
            Send Message
          </button>
        </form>
      </div>
      <Image src="/images/contactus-icon.png" alt="icons" width={300} height={100} className="absolute bottom-0" />
    </section>
  );
};

export default ContactUs;

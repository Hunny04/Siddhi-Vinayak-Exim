"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ContactUs = ({ showDetails = false }: { showDetails?: boolean }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("err", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* World Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/world-map.png')",
        }}
      />

      <div
        className="flex flex-col items-center justify-center z-10 px-4 py-16 w-full"
        style={{
          paddingTop: showDetails ? "8rem" : "4rem",
          paddingBottom: showDetails ? "12rem" : "4rem",
        }}>
        {/* Company Details */}
        {showDetails && (
          <div className="bg-white/95 text-center text-black mb-8 p-8 rounded-md shadow-lg">
            <h1 className="text-3xl font-bold tracking-wide">Siddhi Vinayak Exim</h1>

            <p className="mt-3 text-sm md:text-base opacity-90">
              📞 <span className="font-medium">8320708852</span> | <span className="font-medium">8733928558</span>
            </p>

            <p className="mt-1 text-sm md:text-base opacity-90">✉️ siddhivinayakeximtbp55@gmail.com</p>
          </div>
        )}

        {/* Contact Card */}
        <div className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center font-campuni">Contact Us</h2>
          <p className="text-gray-600 text-center mb-8 font-[Faible]">We'd love to hear from you. Let's connect.</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 font-campuni">
            {/* Name */}
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />

            {/* Contact Number */}
            <input
              name="mobile"
              type="tel"
              placeholder="Contact Number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg py-3 font-semibold transition flex items-center justify-center gap-2 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#214d3b]/85 hover:bg-[#1b3d2d] text-white"}`}>
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && (
            <p className="mt-4 text-green-700 text-center font-medium">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}
        </div>
      </div>

      <Image src="/images/contactus-icon.png" alt="icons" width={300} height={100} className="absolute bottom-0" />
    </section>
  );
};

export default ContactUs;

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Opening = {
  id: string;
  title: string;
};

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [openings, setOpenings] = useState<Opening[]>([]);

  useEffect(() => {
    fetch("/api/openings")
      .then((res) => res.json())
      .then(setOpenings);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <section className="bg-[#214d3b] text-white px-4 md:py-16 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Careers</h1>
          <p className="text-sm md:text-base opacity-90">
            <Link href="/">Home</Link> / Careers
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section
        style={{
          background: "url(/images/about-bg.jpg)",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
          backgroundPosition: "top",
        }}>
        <div
          className="px-4 py-12"
          style={{
            backdropFilter: "blur(10px)",
          }}>
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Siddhi Vinayak Exim is engaged in sourcing and supplying premium herbal raw materials, powders, and
              natural products catering to industries such as Pharmaceutical, Food, Wellness, Healthcare, and Cosmetics.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              To meet our growing business needs, we are always looking for young, dynamic, and motivated professionals.
              Interested candidates can apply for the positions listed below.
            </p>

            {/* ================= OPENINGS ================= */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Current Openings</h2>

              <ul className="list-decimal list-inside space-y-2 text-[#214d3b] font-medium">
                {openings.length > 0 ? (
                  openings.map((job) => <li key={job.id}>{job.title}</li>)
                ) : (
                  <li>No current openings</li>
                )}
              </ul>

              <div className="mt-6 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Mail resume on:</span>{" "}
                  <a href="mailto:siddhivinayakeximtbp55@gmail.com" className="text-[#214d3b] underline">
                    siddhivinayakeximtbp55@gmail.com
                  </a>
                </p>
                <p className="mt-1">
                  <span className="font-medium">Contact:</span> +91 7359357650
                </p>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Upload Resume</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  name="mobile"
                  type="tel"
                  placeholder="Contact Number (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  name="jobTitle"
                  type="text"
                  placeholder="Job Title (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  name="experience"
                  type="text"
                  placeholder="Total Experience (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  name="location"
                  type="text"
                  placeholder="Current Location (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  name="resume"
                  type="file"
                  className="w-full border px-4 py-2 rounded border-[#214d3b] cursor-pointer"
                />

                <textarea
                  name="message"
                  placeholder="Message (Required)"
                  rows={4}
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required></textarea>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <button
                    type="reset"
                    disabled={loading}
                    className={`px-6 py-2 border rounded transition-all duration-300 ${loading ? "border-gray-300 text-gray-400 cursor-not-allowed" : "border-gray-500 hover:bg-gray-600 hover:text-white cursor-pointer"}`}
                    onClick={() => {
                      setSuccess(false);
                    }}>
                    Reset
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-[#214d3b] text-white rounded hover:bg-[#183a2c] transition-all duration-300 cursor-pointer">
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              {success && (
                <p className="text-green-700 mt-4 font-medium">
                  ✅ Your application has been submitted successfully. Our team will contact you if shortlisted.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

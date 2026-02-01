import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <section className="bg-[#214d3b] text-white px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Careers</h1>
          <p className="text-sm md:text-base opacity-90">Home / Careers</p>
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
                <li>Accounts Executive</li>
                <li>Office Assistant</li>
                <li>Customer Service Executive</li>
              </ul>

              <div className="mt-6 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Mail resume on:</span>{" "}
                  <a href="mailto:hr@siddhivinayakexim.com" className="text-[#214d3b] underline">
                    hr@siddhivinayakexim.com
                  </a>
                </p>
                <p className="mt-1">
                  <span className="font-medium">Contact:</span> +91 9XXXXXXXXX
                </p>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Upload Resume</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  type="email"
                  placeholder="Email (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  type="tel"
                  placeholder="Contact Number (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  type="text"
                  placeholder="Job Title (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  type="text"
                  placeholder="Total Experience (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input
                  type="text"
                  placeholder="Current Location (Required)"
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required
                />

                <input type="file" className="w-full border px-4 py-2 rounded border-[#214d3b] cursor-pointer" />

                <textarea
                  placeholder="Message (Required)"
                  rows={4}
                  className="w-full border px-4 py-2 rounded focus:outline-none border-[#214d3b]"
                  required></textarea>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <button
                    type="reset"
                    className="px-6 py-2 border border-gray-500 rounded hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#214d3b] text-white rounded hover:bg-[#183a2c] transition-all duration-300 cursor-pointer">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

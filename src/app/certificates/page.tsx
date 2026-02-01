"use client";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const certificates = [
  {
    title: "Udyam Registration",
    description: "Registered under the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India.",
    image: "/images/certificates/udyam-registration.png",
  },
  {
    title: "GST Registration",
    description: "Registered under Goods and Services Tax (GST), Government of India.",
    image: "/images/certificates/gst.png",
  },
  {
    title: "Import Export Code (IEC)",
    description: "Authorized Import Export License issued by Directorate General of Foreign Trade (DGFT).",
    image: "/images/certificates/import-export.png",
  },
];

export default function CertificatesPage() {
  const [activeCert, setActiveCert] = useState<null | (typeof certificates)[0]>(null);

  return (
    <main className="bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <section className="bg-[#214d3b] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Our Certifications</h1>
          <p className="text-sm md:text-base opacity-90">Government Registered & Export Authorized</p>
        </div>
      </section>

      {/* ================= CERTIFICATES GRID ================= */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition bg-white flex flex-col">
              <div className="h-72 bg-gray-100 flex items-center justify-center mb-4">
                <Image src={cert.image} alt={cert.title} width={300} height={400} className="object-contain h-full" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
              <div className="flex-1"></div>

              <button
                onClick={() => setActiveCert(cert)}
                className="w-full border border-[#214d3b] text-[#214d3b] py-2 rounded hover:bg-[#214d3b] hover:text-white transition cursor-pointer">
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL VIEW ================= */}
      {activeCert && (
        <div className="fixed inset-0 z-9999 bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-blac cursor-pointer">
              <X size={28} />
            </button>

            {/* Certificate Image */}
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4">{activeCert.title}</h2>

              <Image
                src={activeCert.image}
                alt={activeCert.title}
                width={800}
                height={1000}
                className="object-contain max-h-[75vh]"
              />
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={() => setActiveCert(null)} />
        </div>
      )}
    </main>
  );
}

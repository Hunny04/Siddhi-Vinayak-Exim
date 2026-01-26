"use client";

import { useState } from "react";

const productOptions = ["Ashwagandha Roots", "Ashwagandha Powder", "Safed Musli Roots", "Safed Musli Powder"];

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/inquiry", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      window.open("https://wa.me/918320708852?text=Hello, I have submitted an inquiry on your website.", "_blank");
      alert("Inquiry submitted successfully!");
      e.currentTarget.reset();
    } else {
      alert("Failed to send inquiry. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white border rounded-xl p-6 space-y-6 shadow-sm">
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Get a Quote</h2>
        <p className="text-sm text-gray-500 mt-1">
          Tell us your requirement so we can offer accurate pricing and shipping.
        </p>
      </div>

      {/* BUYER DETAILS */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">Buyer Details</h3>

        <input name="fullName" required placeholder="Full Name" className="input" />

        <input name="companyName" required placeholder="Company Name" className="input" />

        <select name="country" required className="input">
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>Germany</option>
          <option>UAE</option>
          <option>Other</option>
        </select>
      </div>

      {/* PRODUCT REQUIREMENT */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">Product Requirement</h3>

        <select name="products" required className="input">
          {productOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <input name="quantity" required placeholder="Estimated Quantity (e.g. 100 Kg / 1 Ton)" className="input" />
      </div>

      {/* SHIPPING DETAILS */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">Shipping Details</h3>

        <input name="port" placeholder="Preferred Port of Delivery" className="input" />

        <textarea
          name="requirements"
          placeholder="Special requirements (Packaging, Organic certification, etc.)"
          className="input h-24 resize-none"
        />
      </div>

      {/* SUBMIT */}
      <button disabled={loading} className="w-full bg-green-700 text-white py-2 rounded font-medium">
        {loading ? "Sending Inquiry..." : "Send Inquiry"}
      </button>

      {/* TRUST NOTE */}
      <p className="text-xs text-gray-500 text-center">We respond to all genuine inquiries within 24 hours.</p>
    </form>
  );
}

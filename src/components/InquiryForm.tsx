"use client";

import { countries } from "@/data/countries";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const productFromUrl = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (productFromUrl) {
      setSelectedProduct(productFromUrl);
    }
  }, [productFromUrl]);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_name) {
          setCountry(data.country_name);
        }
      });
  }, []);

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
      // window.open("https://wa.me/918320708852?text=Hello, I have submitted an inquiry on your website.", "_blank");
      alert("Inquiry submitted successfully!");
      e.currentTarget.reset();
    } else {
      alert("Failed to send inquiry. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full bg-white border rounded-xl p-6 space-y-5 shadow-sm">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Inquiry Form</h2>
      </div>

      {/* BASIC DETAILS */}
      <input name="fullName" required placeholder="Full Name" className="input" />

      <input type="email" name="email" required placeholder="Email Address" className="input" />

      <input type="tel" name="mobile" required placeholder="Mobile / WhatsApp Number" className="input" />

      <select name="country" required className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* PRODUCT SELECT */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Product</label>

        <select
          name="product"
          required
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="input">
          <option value="">Select Product</option>

          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <input name="quantity" required placeholder="Quantity Required (e.g. 10 Kg / 1 Ton)" className="input" />

      {/* PURPOSE */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Purpose</p>
        <div className="flex gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="purpose" value="Personal / Retail" required />
            Personal / Retail
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="purpose" value="Bulk / Export" />
            Bulk / Export
          </label>
        </div>
      </div>

      {/* MESSAGE */}
      <textarea name="message" placeholder="Message (Optional)" className="input h-24 resize-none" />

      {/* SUBMIT */}
      <button
        disabled={loading}
        className="w-full bg-[#214d3b] hover:bg-[#183a2c] text-white py-2 rounded font-medium transition">
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>

      {/* FOOTER NOTE */}
      <p className="text-xs text-gray-500 text-center">
        📩 Inquiry goes to: <span className="font-medium">siddhivinayakeximtbp55@gmail.com</span>
      </p>
    </form>
  );
}

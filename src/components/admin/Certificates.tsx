"use client";

import { useState } from "react";

export default function Certificates() {
  const [certs, setCerts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#214d3b]">Certificates</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8 space-y-4">
        <input type="file" />

        <input
          placeholder="Title"
          className="border w-full px-3 py-2 rounded"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border w-full px-3 py-2 rounded"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          onClick={() => setCerts([...certs, { title, desc }])}
          className="bg-[#214d3b] text-white px-6 py-2 rounded">
          Add Certificate
        </button>
      </div>

      {certs.map((c, i) => (
        <div key={i} className="bg-white p-4 rounded shadow mb-3">
          <h3 className="font-bold">{c.title}</h3>
          <p className="text-sm">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Careers() {
  const [jobs, setJobs] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#214d3b]">Careers</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8 flex gap-4">
        <input
          placeholder="Job Title"
          className="border flex-1 px-3 py-2 rounded"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={() => setJobs([...jobs, title])} className="bg-[#214d3b] text-white px-6 py-2 rounded">
          Add
        </button>
      </div>

      {jobs.map((job, i) => (
        <div key={i} className="bg-white p-4 rounded shadow mb-3">
          {job}
        </div>
      ))}
    </div>
  );
}

"use client";

import { supabase } from "@/lib/supabase";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type Career = {
  id: string;
  title: string;
};

export default function Careers() {
  const [jobs, setJobs] = useState<Career[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // FETCH ON LOAD
  const fetchCareers = async () => {
    const { data } = await supabase.from("careers").select("*").order("created_at", { ascending: false });

    if (data) setJobs(data);
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleSave = async () => {
    setLoading(true);

    await supabase.from("careers").insert({
      title,
    });

    setTitle("");
    await fetchCareers();
    setLoading(false);
  };

  // DELETE
  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Delete this opening?");
    if (!confirm) return;

    await supabase.from("careers").delete().eq("id", id);

    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#214d3b]">Careers</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8 flex gap-4">
        <input
          placeholder="Job Title"
          className="border flex-1 px-3 py-2 rounded"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleSave} disabled={loading} className="bg-[#214d3b] text-white px-6 rounded cursor-pointer">
          {loading ? "Saving..." : "Add"}
        </button>
      </div>

      <div className="space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white border rounded-xl shadow px-6 py-4 flex justify-between items-center">
            {job.title}

            <button onClick={() => handleDelete(job.id)} className="text-red-500 text-sm cursor-pointer">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

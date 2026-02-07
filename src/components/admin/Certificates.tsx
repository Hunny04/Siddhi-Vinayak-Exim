"use client";

import { supabase } from "@/lib/supabase";
import { uploadImage } from "@/lib/uploadImage";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Certificates() {
  const [certs, setCerts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!file) return alert("Select image");

    setLoading(true);

    const imageUrl = await uploadImage(file);

    await supabase.from("certificates").insert({
      title,
      description: desc,
      image: imageUrl,
    });

    setTitle("");
    setDesc("");
    setFile(null);
    await fetchCertificates();
    setLoading(false);
  };

  // DELETE
  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Delete this certificate?");
    if (!confirm) return;

    await supabase.from("certificates").delete().eq("id", id);

    setCerts((prev) => prev.filter((c) => c.id !== id));
  };

  // FETCH ON LOAD
  const fetchCertificates = async () => {
    const { data } = await supabase.from("certificates").select("*").order("created_at", { ascending: false });

    if (data) setCerts(data);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#214d3b]">Certificates</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8 space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0]!)}
          className="border w-full px-3 py-2 rounded"
        />

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
          disabled={loading}
          onClick={handleSave}
          className="bg-[#214d3b] text-white px-6 py-2 rounded cursor-pointer">
          {loading ? "Saving..." : "Save Certificate"}
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.id} className="border rounded-xl shadow p-3 relative bg-white">
            <button
              onClick={() => handleDelete(c.id)}
              className="absolute top-2 right-2 text-red-500 text-sm cursor-pointer">
              <Trash2 size={16} />
            </button>

            <img src={c.image} className="h-32 w-full object-cover rounded mb-2" />

            <h3 className="font-bold">{c.title}</h3>
            <p className="text-sm opacity-70">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

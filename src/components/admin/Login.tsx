"use client";

import { useState } from "react";

export default function Login({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") onSuccess();
    else alert("Wrong password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef3f8]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-[#214d3b] mb-6 text-center">Admin Login</h2>

        <input
          type="password"
          placeholder="Password"
          className="border w-full px-4 py-2 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="w-full bg-[#214d3b] text-white py-2 rounded hover:bg-[#183a2c]">
          Login
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Certificates from "./Certificates";
import Careers from "./Careers";

export default function AdminLayout() {
  const [tab, setTab] = useState<"certificates" | "careers">("certificates");

  return (
    <div className="min-h-screen flex bg-[#eef3f8]">
      <Sidebar tab={tab} setTab={setTab} />

      <main className="flex-1 p-8">
        {tab === "certificates" && <Certificates />}
        {tab === "careers" && <Careers />}
      </main>
    </div>
  );
}

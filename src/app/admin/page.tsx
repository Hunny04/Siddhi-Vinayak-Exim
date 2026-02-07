"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Login from "@/components/admin/Login";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <Login onSuccess={() => setAuthenticated(true)} />;
  }

  return <AdminLayout />;
}

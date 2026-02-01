"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (show) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-[#214d3b] mb-4">Siddhi Vinayak Exim</h1>
        <div className="w-12 h-12 border-4 border-[#214d3b] border-t-transparent rounded-full animate-spin" />
        <p className="mt-3 text-sm text-gray-600">Loading experience...</p>
      </div>
    );
  }

  return <>{children}</>;
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const InquiryButton = ({ productSlug }: { productSlug: string }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/inquire?product=${productSlug}`);
  }, [router, productSlug]);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/inquire?product=${productSlug}`);
      }}
      className="flex-1 bg-[#214d3b] text-white py-2 rounded hover:bg-[#183a2c] transition cursor-pointer">
      Inquiry
    </button>
  );
};

export default InquiryButton;

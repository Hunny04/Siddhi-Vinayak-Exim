import { Suspense } from "react";
import InquiryForm from "./InquiryForm";

export default function InquiryFormWrapper() {
  return (
    <Suspense fallback={<div className="max-w-md w-full bg-white border rounded-xl p-6 animate-pulse h-96" />}>
      <InquiryForm />
    </Suspense>
  );
}

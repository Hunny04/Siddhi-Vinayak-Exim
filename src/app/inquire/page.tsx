import InquiryFormWrapper from "@/components/InquiryFormWrapper";
import "@/styles/inquire.css";

export default function InquirePage() {
  return (
    <main
      className="min-h-screen bg-gray-50 flex items-start justify-center"
      style={{
        background: "url(/images/about-bg.jpg)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100%",
        backgroundPosition: "top",
      }}>
      <div
        className="pb-16 pt-30 px-4 w-full flex justify-center items-center"
        style={{
          backdropFilter: "blur(10px)",
        }}>
        <InquiryFormWrapper />
      </div>
    </main>
  );
}

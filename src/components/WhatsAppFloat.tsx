import Image from "next/image";
import Link from "next/link";

export default function WhatsAppFloat() {
  const phoneNumber = "917359357650";
  const message = "Hello, I would like to inquire about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappLink} target="_blank" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-999999">
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={30} height={30} className="object-contain" />
      </div>
    </Link>
  );
}

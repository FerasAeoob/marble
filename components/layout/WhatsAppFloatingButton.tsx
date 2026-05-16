import Link from "next/link";
import { whatsappQuoteLink } from "@/data/business";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={whatsappQuoteLink}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-black/25 transition hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <span aria-hidden="true">✆</span>
      WhatsApp
    </Link>
  );
}

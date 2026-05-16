import Link from "next/link";
import { business, whatsappQuoteLink } from "@/data/business";

const quickLinks = ["About", "Services", "Gallery", "CNC Work", "Contact"];
const services = ["Kitchen countertops", "Marble stairs", "Bathroom vanities", "CNC stone work", "Polishing"];

export function Footer() {
  return (
    <footer className="bg-[#161b1e] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold">{business.name}</h2>
          <p className="mt-4 text-sm leading-7 text-white/65">{business.tagline} Built for homeowners, contractors, designers, architects, and local stores.</p>
          <div className="mt-6 flex gap-3">
            <Link href={whatsappQuoteLink} className="rounded-full bg-[#b8935f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a6804f]">WhatsApp</Link>
            <Link href={`tel:${business.phoneHref}`} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#161b1e]">Call</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2d6a2]">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {quickLinks.map((item) => (
              <li key={item}><Link className="transition hover:text-white" href={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2d6a2]">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {services.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2d6a2]">Contact</h3>
          <address className="mt-5 space-y-3 text-sm not-italic text-white/70">
            <p>{business.location}</p>
            <p>{business.hours}</p>
            <p><Link className="hover:text-white" href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</Link></p>
            <p><Link className="hover:text-white" href={`mailto:${business.email}`}>{business.email}</Link></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}

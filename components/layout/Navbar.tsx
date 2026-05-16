"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, whatsappQuoteLink } from "@/data/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/cnc-work", label: "CNC Work" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#e8dfd2]/80 bg-[#fbf8f2]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1f2528] font-serif text-xl font-bold text-[#f2d6a2]">M</span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold tracking-tight text-[#1f2528]">{business.name}</span>
            <span className="hidden text-xs uppercase tracking-[0.22em] text-[#8c7a62] sm:block">Stone Workshop</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-[#b8935f] ${pathname === link.href ? "text-[#b8935f]" : "text-[#4b565a]"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={`tel:${business.phoneHref}`} className="rounded-full border border-[#d8c8ae] px-4 py-2 text-sm font-semibold text-[#1f2528] transition hover:border-[#b8935f] hover:bg-white">
            Call
          </Link>
          <Link href={whatsappQuoteLink} className="rounded-full bg-[#1f2528] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#b8935f]">
            WhatsApp Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c8ae] text-[#1f2528] lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Open menu</span>
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#e8dfd2] bg-[#fbf8f2] px-4 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${pathname === link.href ? "bg-white text-[#b8935f]" : "text-[#1f2528] hover:bg-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mx-auto flex max-w-7xl gap-3">
            <Link href={`tel:${business.phoneHref}`} className="flex-1 rounded-full border border-[#d8c8ae] px-4 py-3 text-center text-sm font-semibold text-[#1f2528]">
              Call
            </Link>
            <Link href={whatsappQuoteLink} className="flex-1 rounded-full bg-[#1f2528] px-4 py-3 text-center text-sm font-semibold text-white">
              WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

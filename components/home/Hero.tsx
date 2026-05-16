import { CTAButton } from "@/components/ui/CTAButton";
import { whatsappQuoteLink } from "@/data/business";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#161b1e] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(184,147,95,0.35),transparent_35%),linear-gradient(120deg,rgba(22,27,30,0.95),rgba(22,27,30,0.70)),url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#fbf8f2] to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f2d6a2] backdrop-blur">
            Local Stone Fabrication • CNC • Installation
          </p>
          <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Premium Marble & Stone Work for Kitchens, Stairs, and Custom Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            High-quality fabrication, CNC cutting, polishing, and installation for homes and businesses.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/contact" variant="primary">Get a Quote</CTAButton>
            <CTAButton href="/gallery" variant="light">View Our Work</CTAButton>
            <CTAButton href={whatsappQuoteLink} variant="ghost" className="border-white/25 text-white hover:bg-white hover:text-[#1f2528]">WhatsApp CTA</CTAButton>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -left-8 top-12 h-64 w-64 rounded-full bg-[#b8935f]/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
              alt="Premium stone kitchen installation with marble-style surfaces"
              className="h-[460px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-[#fbf8f2]/95 p-6 text-[#1f2528] shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b8935f]">Workshop Quality</p>
              <p className="mt-2 text-2xl font-semibold">Precise cuts, clean edges, careful installation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

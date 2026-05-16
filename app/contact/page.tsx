import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business, whatsappQuoteLink } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact & Request a Stone Quote",
  description: "Contact the marble and stone workshop for a quote. Send photos, drawings, dimensions, service type, and project details by form, WhatsApp, or phone.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1f2528] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d6a2]">Contact</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold sm:text-6xl">Send photos, dimensions, or drawings and request a stone quote.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Tell us what you need for kitchens, stairs, bathrooms, wall cladding, CNC work, polishing, or installation.</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Request a quote" title="We will guide you through the next step" description="For the fastest estimate, send measurements, photos of the space, material preferences, sink or hob details, and any drawing you already have." />
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-[#1f2528]">Phone</h2>
                <p className="mt-2 text-[#667074]">{business.phoneDisplay}</p>
              </div>
              <div className="rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-[#1f2528]">Location</h2>
                <p className="mt-2 text-[#667074]">{business.location}</p>
              </div>
              <div className="rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-[#1f2528]">Business Hours</h2>
                <p className="mt-2 text-[#667074]">{business.hours}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={whatsappQuoteLink}>WhatsApp</CTAButton>
              <CTAButton href={`tel:${business.phoneHref}`} variant="secondary">Call</CTAButton>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

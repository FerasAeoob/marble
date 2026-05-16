import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappQuoteLink } from "@/data/business";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Marble & Stone Services",
  description: "Explore kitchen countertops, marble stairs, bathroom vanities, wall cladding, fireplaces, custom pieces, CNC cutting, edge profiles, polishing and restoration.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1f2528] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d6a2]">Services</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold sm:text-6xl">Complete marble, granite, porcelain, quartz, and natural stone services.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Detailed fabrication, finishing, and installation for residential and commercial stone projects.</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How we help" title="Detailed service cards for every project type" description="Each service includes practical benefits and a direct quote request path so customers know exactly how to start." />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7da] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#1f2528]">Need pricing for a specific stone detail?</h2>
            <p className="mt-3 text-[#667074]">Send measurements, drawings, or photos and we will help you plan the right material and finish.</p>
          </div>
          <CTAButton href={whatsappQuoteLink}>Send Details on WhatsApp</CTAButton>
        </div>
      </section>
    </>
  );
}

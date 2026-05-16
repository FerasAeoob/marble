import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappQuoteLink } from "@/data/business";

export const metadata: Metadata = {
  title: "CNC Stone Cutting & Custom Work",
  description: "Precision CNC stone cutting, engraving, sink cutouts, drain grooves, decorative panels, custom shapes, and repeatable stone production.",
};

const cncServices = [
  "CNC stone cutting",
  "Engraving and lettering",
  "Sink and hob cutouts",
  "Drain grooves",
  "Decorative stone panels",
  "Custom shapes and templates",
  "Small stone products",
  "Precision repeatable production",
];

const steps = [
  { title: "Send a drawing", description: "Share a sketch, CAD file, photo, dimensions, or reference image." },
  { title: "Confirm material", description: "We review slab type, thickness, finish, and any limitations." },
  { title: "Cut and finish", description: "CNC work is completed with polishing, edge finishing, or engraving as needed." },
];

export default function CncWorkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1f2528] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,147,95,0.28),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d6a2]">CNC / Custom Work</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold sm:text-6xl">Precision CNC stone cutting for custom shapes, grooves, engraving, and repeatable production.</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">Send us your drawing, photo, or dimensions. We can help turn stone ideas into clean, accurate workshop-ready pieces.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={whatsappQuoteLink}>Send Drawing on WhatsApp</CTAButton>
              <CTAButton href="/contact" variant="light">Contact Form</CTAButton>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80" alt="CNC machine cutting a custom stone detail" className="h-[460px] w-full rounded-[2rem] object-cover shadow-2xl" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Capabilities" title="Custom stone work made with digital accuracy" description="CNC equipment helps create repeatable, detailed, and cleaner results for complex stone work." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cncServices.map((service) => (
              <div key={service} className="rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-[#b8935f]">◆</span>
                <h2 className="mt-4 text-xl font-semibold text-[#1f2528]">{service}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7da] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="How to start" title="From idea to cut stone" description="Keep it simple: share the details you have and we will tell you what else is needed for pricing and production." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}
          </div>
        </div>
      </section>
    </>
  );
}

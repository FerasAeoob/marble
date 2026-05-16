import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappQuoteLink } from "@/data/business";

export const metadata: Metadata = {
  title: "About Our Stone Workshop",
  description: "Learn about a local marble and stone workshop focused on quality, accurate measurements, premium finishing, modern CNC capabilities, and trustworthy installation.",
};

const values = ["Quality fabrication", "Accurate measurements", "Modern CNC capability", "Professional finishing", "Trustworthy local service", "Custom project support"];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1f2528] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d6a2]">About</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold sm:text-6xl">A serious local stone workshop built on accuracy, finish, and trust.</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">We fabricate and install marble, granite, porcelain, quartz, and natural stone for homes, contractors, designers, architects, kitchen companies, and stores.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80" alt="Stone fabrication workshop placeholder with tools and material" className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Our story" title="Professional stone work without exaggeration" description="Our goal is simple: understand the project, measure correctly, fabricate cleanly, finish edges well, and install with care. We support everyday countertops and stairs as well as detailed custom work using modern CNC processes." />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => <div key={value} className="rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm"><span className="text-[#b8935f]">◆</span><h2 className="mt-4 text-xl font-semibold text-[#1f2528]">{value}</h2></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7da] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading align="center" eyebrow="Our promise" title="Every project deserves clean details and honest communication" description="We guide customers through material options, edge profiles, CNC possibilities, installation planning, and realistic next steps before work begins." />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href="/services" variant="secondary">Explore Services</CTAButton>
            <CTAButton href={whatsappQuoteLink}>WhatsApp Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

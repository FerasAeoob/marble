import { Hero } from "@/components/home/Hero";
import { ProjectCard } from "@/components/gallery/ProjectCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { whatsappQuoteLink } from "@/data/business";
import { processSteps, projects } from "@/data/projects";
import { services } from "@/data/services";

const highlights = ["Custom fabrication", "CNC precision cutting", "Professional installation", "Premium finishing"];
const whyChooseUs = ["Accurate measurements", "Strong finishing quality", "Careful installation", "Custom solutions", "Local reliable service"];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-[#fbf8f2] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div key={highlight} className="rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 rounded-full bg-[#b8935f]" />
              <h2 className="text-lg font-semibold text-[#1f2528]">{highlight}</h2>
              <p className="mt-3 text-sm leading-7 text-[#667074]">Premium workmanship with practical guidance from measurement to installation.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we make" title="Stone services for homes, shops, and professional projects" description="From everyday kitchen surfaces to detailed CNC pieces, every job is planned for fit, finish, and long-term use." />
            <CTAButton href="/services" variant="ghost">All Services</CTAButton>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} compact />)}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7da] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Featured work" title="Project gallery preview" description="A replaceable placeholder gallery showing the style, details, and project information your customers expect to see." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="mt-10 text-center"><CTAButton href="/gallery" variant="secondary">View Full Gallery</CTAButton></div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Our process" title="A clear workflow from idea to installed stone" description="Simple steps keep your project organized, accurate, and easy to quote." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1f2528] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,147,95,0.24),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d6a2]">Why choose us</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Quality you can see in the edges, seams, and final installation.</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">We focus on the details that make stone work feel premium: correct measurements, clean cuts, aligned pieces, polished edges, and dependable communication.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <span className="text-[#f2d6a2]">◆</span>
                <h3 className="mt-4 text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 grid gap-5 md:grid-cols-2">
            <TestimonialCard quote="Professional measurement, clean installation, and the countertop finish looked exactly like the sample we selected." name="Homeowner" role="Kitchen project" />
            <TestimonialCard quote="Reliable workshop support for stone details, cutouts, and fast communication on our renovation projects." name="Contractor" role="Local building partner" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#efe7da] p-8 text-center shadow-xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8935f]">Ready for a quote?</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#1f2528] sm:text-5xl">Send us your kitchen/stair design and get a quote</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#667074]">Share photos, dimensions, sketches, or drawings. We will guide you on material, finish, and next steps.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href={whatsappQuoteLink}>WhatsApp Quote</CTAButton>
            <CTAButton href="tel:+15551234567" variant="secondary">Call Now</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

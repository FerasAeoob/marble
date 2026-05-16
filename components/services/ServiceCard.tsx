import { CTAButton } from "@/components/ui/CTAButton";
import type { Service } from "@/lib/types";

type ServiceCardProps = { service: Service; compact?: boolean };

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#e8dfd2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        <img src={service.image} alt={`${service.title} stone service placeholder`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-[#1f2528]">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#667074]">{service.description}</p>
        {!compact ? (
          <ul className="mt-5 space-y-2 text-sm text-[#4b565a]">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2"><span className="mt-1 text-[#b8935f]">◆</span>{benefit}</li>
            ))}
          </ul>
        ) : null}
        <CTAButton href="/contact" variant="ghost" className="mt-6">Request Quote</CTAButton>
      </div>
    </article>
  );
}

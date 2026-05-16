type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur">
      <blockquote className="text-base leading-8 text-white/85">“{quote}”</blockquote>
      <figcaption className="mt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </figcaption>
    </figure>
  );
}

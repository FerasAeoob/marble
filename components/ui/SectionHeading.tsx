type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#b8935f]">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#1f2528] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-[#667074] sm:text-lg">{description}</p> : null}
    </div>
  );
}

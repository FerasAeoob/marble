import type { ProcessStepData } from "@/lib/types";

type ProcessStepProps = ProcessStepData & { number: number };

export function ProcessStep({ title, description, number }: ProcessStepProps) {
  return (
    <div className="group rounded-3xl border border-[#e8dfd2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f2528] text-sm font-bold text-[#f2d6a2] transition group-hover:bg-[#b8935f] group-hover:text-white">
        {String(number).padStart(2, "0")}
      </div>
      <h3 className="text-lg font-semibold text-[#1f2528]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#667074]">{description}</p>
    </div>
  );
}

import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery & Stone Projects",
  description: "View marble and stone project placeholders filtered by kitchens, stairs, bathrooms, CNC work, wall cladding, and custom pieces.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#1f2528] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d6a2]">Gallery</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold sm:text-6xl">Kitchens, stairs, bathrooms, CNC details, and custom stone projects.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Use the category filters and simple lightbox to present completed work once your real photos are ready.</p>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Project types" title="Filter by category" description="Replace these placeholder records with your real project titles, locations, materials, and images." />
          <div className="mt-12"><GalleryGrid /></div>
        </div>
      </section>
    </>
  );
}

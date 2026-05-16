"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/gallery/ProjectCard";
import { projectCategories, projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/lib/types";

type ActiveCategory = ProjectCategory | "All";

export function GalleryGrid() {
  const [active, setActive] = useState<ActiveCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === category ? "bg-[#1f2528] text-white shadow-lg" : "border border-[#d8c8ae] bg-white text-[#4b565a] hover:border-[#b8935f]"
            }`}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={setSelected} />
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} project details`}
          onClick={() => setSelected(null)}
        >
          <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              <img src={selected.image} alt={selected.alt} className="h-[58vh] w-full object-cover" />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white text-xl font-bold text-[#1f2528] shadow-lg"
                aria-label="Close project preview"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b8935f]">{selected.category}</p>
              <h3 className="mt-2 font-serif text-3xl font-semibold text-[#1f2528]">{selected.title}</h3>
              <p className="mt-3 text-[#667074]">{selected.material} • {selected.location}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

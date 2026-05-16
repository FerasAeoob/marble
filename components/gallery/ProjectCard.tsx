import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  onClick?: (project: Project) => void;
};

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="relative h-64 overflow-hidden">
        <img src={project.image} alt={project.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1f2528]">{project.category}</span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-[#1f2528]">{project.title}</h3>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#9a8b75]">Material</dt>
            <dd className="mt-1 font-medium text-[#4b565a]">{project.material}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#9a8b75]">Location</dt>
            <dd className="mt-1 font-medium text-[#4b565a]">{project.location}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const classes = "group w-full overflow-hidden rounded-3xl border border-[#e8dfd2] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl";

  if (onClick) {
    return (
      <button type="button" onClick={() => onClick(project)} className={classes}>
        <ProjectCardContent project={project} />
      </button>
    );
  }

  return (
    <article className={classes}>
      <ProjectCardContent project={project} />
    </article>
  );
}

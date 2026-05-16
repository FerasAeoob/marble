export type Service = {
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  image: string;
};

export type ProjectCategory =
  | "Kitchens"
  | "Stairs"
  | "Bathrooms"
  | "CNC Work"
  | "Wall Cladding"
  | "Custom Pieces";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  material: string;
  location: string;
  image: string;
  alt: string;
};

export type ProcessStepData = {
  title: string;
  description: string;
};

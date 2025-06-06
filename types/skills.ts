export type ProjectTag =
  | "research"
  | "hackathon"
  | "long-term-internship"
  | "short-term-internship"
  | "personal";

export interface Project {
  id: number;
  title: string;
  description: string;
  features?: string[];
  role?: string[];
  considerations?: string[];
  challenges?: string[];
  learnings?: string[];
  technologies: string[];
  images: string[];
  githubUrl: string | null;
  period: string;
  tags: ProjectTag[];
}

export interface Skill {
  name: string;
  level: number;
  iconPath: string;
  description: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  color: string;
  bgColor: string;
  skills: Skill[];
}

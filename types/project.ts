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

export const tagLabels: Record<ProjectTag, string> = {
  research: "研究",
  hackathon: "ハッカソン",
  "long-term-internship": "長期インターン",
  "short-term-internship": "短期インターン",
  personal: "個人開発",
} as const;

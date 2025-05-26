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

export const skillCategories: SkillCategory[] = [
  {
    name: "Language",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    skills: [
      {
        name: "TypeScript",
        level: 3,
        iconPath: "/icons/typescript.svg",
        description: "",
        details: [],
      },
      {
        name: "Python",
        level: 3,
        iconPath: "/icons/python.svg",
        description: "",
        details: [],
      },
      {
        name: "Ruby",
        level: 2,
        iconPath: "/icons/ruby.svg",
        description: "",
        details: [],
      },
      {
        name: "Java",
        level: 1,
        iconPath: "/icons/java.svg",
        description: "",
        details: [],
      },
      {
        name: "R",
        level: 1,
        iconPath: "/icons/r.svg",
        description: "",
        details: [],
      },
    ],
  },
  {
    name: "Framework",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    skills: [
      {
        name: "Next.js",
        level: 3,
        iconPath: "/icons/nextjs.svg",
        description: "",
        details: [],
      },
      {
        name: "Ruby on Rails",
        level: 2,
        iconPath: "/icons/rails.svg",
        description: "",
        details: [],
      },
      {
        name: "React",
        level: 2,
        iconPath: "/icons/react.svg",
        description: "",
        details: [],
      },
      {
        name: "Vite",
        level: 2,
        iconPath: "/icons/vite.svg",
        description: "",
        details: [],
      },
    ],
  },
  {
    name: "DB & Cloud",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    skills: [
      {
        name: "PostgreSQL",
        level: 3,
        iconPath: "/icons/database.svg",
        description: "",
        details: [],
      },
      {
        name: "Supabase",
        level: 3,
        iconPath: "/icons/supabase.svg",
        description: "",
        details: [],
      },
    ],
  },
  {
    name: "Others",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    skills: [
      {
        name: "Git / GitHub",
        level: 3,
        iconPath: "/icons/git.svg",
        description: "",
        details: [],
      },
      {
        name: "TOEIC",
        level: 895,
        iconPath: "/icons/toeic.svg",
        description: "",
        details: [],
      },
    ],
  },
];

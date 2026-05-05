export interface Experience {
  key: string
  company: string
  role: string
  start: string
  end: string
  url: string
  stack: string[]
}

export const experiences: Experience[] = [
  {
    key: "compass",
    company: "Compass Mining",
    role: "Frontend Developer",
    start: "Aug 2024",
    end: "Apr 2026",
    url: "https://compassmining.io/",
    stack: ["React", "Next.js", "TypeScript", "Chakra UI", "GraphQL"],
  },
  {
    key: "onpoint",
    company: "OnPoint Insurance Services",
    role: "Lead Software Engineer",
    start: "Jun 2023",
    end: "Nov 2024",
    url: "https://onpointins.com/",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
  },
  {
    key: "setlife",
    company: "The Setlife Network",
    role: "Fullstack Developer",
    start: "Sep 2021",
    end: "Sep 2024",
    url: "https://www.setlife.solutions/",
    stack: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "PostgreSQL", "TestCafe"],
  },
]

export const siteConfig = {
  name: "Ovidio Rodríguez",
  email: "ovifer02@gmail.com",
  github: "https://github.com/Ovifer13",
  linkedin: "https://www.linkedin.com/in/ovidio-rodr%C3%ADguez/",
  location: "Caracas, Venezuela",
  initials: "OR",
}

export const skills: { key: string; items: string[] }[] = [
  { key: "languages", items: ["JavaScript", "TypeScript"] },
  { key: "frameworks", items: ["React", "Next.js", "Node.js"] },
  { key: "styling", items: ["Tailwind CSS", "Chakra UI", "shadcn/ui"] },
  { key: "data", items: ["GraphQL", "PostgreSQL"] },
  { key: "testing", items: ["TestCafe"] },
]

export interface Project {
  key: string
  name: string
  stack: string[]
  url: string
}

export const projects: Project[] = [
  {
    key: "setlife",
    name: "Setlife Solutions",
    stack: ["React", "Next.js", "Tailwind", "JavaScript", "Node.js", "GraphQL"],
    url: "https://www.setlife.solutions/",
  },
  {
    key: "onpoint",
    name: "Onpoint Insurance",
    stack: ["React", "Next.js", "Tailwind", "TypeScript", "Node.js", "GraphQL"],
    url: "https://onpointins.com/",
  },
  {
    key: "compass",
    name: "Compass Mining",
    stack: ["React", "Next.js", "TypeScript", "Chakra UI", "GraphQL"],
    url: "https://compassmining.io/",
  },
]

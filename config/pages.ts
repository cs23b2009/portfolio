import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Dasapathi Indra Kumar's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Dasapathi Indra Kumar's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Dasapathi Indra Kumar's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Contact Me",
    metadata: {
      title: "Contact",
      description: "Contact Me",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Dasapathi Indra Kumar's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Dasapathi Indra Kumar's resume.",
    metadata: {
      title: "Resume",
      description: "Dasapathi Indra Kumar's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Dasapathi Indra Kumar's professional journey and experience timeline.",
    },
  },
};

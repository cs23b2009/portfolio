import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "switchit",
    position: "Software Development Engineer Intern",
    company: "SwitchiT",
    location: "Remote",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "Enhanced platform efficiency by optimizing backend API response times by 25%.",
      "Collaborated in agile sprints to implement new product features and fix production issues.",
      "Improved deployment automation pipelines, reducing manual testing efforts by 30%.",
    ],
    achievements: [
      "Enhanced platform efficiency by optimizing backend API response times by 25%.",
      "Improved deployment automation pipelines, reducing manual testing efforts by 30%.",
    ],
    skills: ["Node.js", "express.js", "CI/CD", "Git"],
    companyUrl: "https://switchit.com",
    logo: "/experience/switchit.png",
  },
  {
    id: "pearlthoughts",
    position: "Backend Development Intern",
    company: "PearlThoughts",
    location: "Remote",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-10-01"),
    description: [
      "Engineered RESTful APIs using Node.js and Express.js, supporting 1K+ daily requests.",
      "Designed normalized database schemas and implemented JWT-based secure authentication.",
      "Improved API scalability and data validation, increasing request success rate by 20%.",
    ],
    achievements: [
      "Engineered RESTful APIs using Node.js and Express.js, supporting 1K+ daily requests.",
      "Improved API scalability and data validation, increasing request success rate by 20%.",
    ],
    skills: ["Node.js", "express.js", "JWT", "MySQL", "MongoDB"],
    companyUrl: "https://pearlthoughts.com",
    logo: "/experience/pearlthoughts.png",
  },
  {
    id: "viswam-ai",
    position: "AI Developer Intern",
    company: "VISWAM.AI",
    location: "Remote",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-07-01"),
    description: [
      "Developed RAG-based conversational AI systems integrated with custom GPTs.",
      "Fine-tuned transformer-based LLMs and BERT models for NLP accuracy improvement.",
      "Automated text retrieval pipelines, boosting model response efficiency by 40%.",
    ],
    achievements: [
      "Developed RAG-based conversational AI systems integrated with custom GPTs.",
      "Automated text retrieval pipelines, boosting model response efficiency by 40%.",
    ],
    skills: ["Python", "Machine Learning", "Artificial Intelligence", "Data Science"],
    companyUrl: "https://viswam.ai",
    logo: "/experience/viswam.png",
  },
  {
    id: "cs-club-core",
    position: "Core Member (CP Core)",
    company: "CS Club IIITDM Kancheepuram",
    location: "Kancheepuram, India",
    startDate: new Date("2025-06-01"),
    endDate: "Present",
    description: [
      "Mentored 100+ juniors in Competitive Programming (CP) and Data Structures & Algorithms (DSA).",
      "Organized coding contests and workshops to foster a strong coding culture on campus.",
    ],
    achievements: [
      "Mentored 100+ juniors in Competitive Programming (CP) and Data Structures & Algorithms (DSA).",
    ],
    skills: ["C++", "Python", "Git", "GitHub"],
    companyUrl: "https://cs-club-website-sepia.vercel.app/team",
    logo: "/experience/cs.png.jpeg",
  },
  {
    id: "placement-cell",
    position: "Placement Cell Volunteer",
    company: "Training and Placement Cell, IIITDM Kancheepuram",
    location: "Kancheepuram, India",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Assisting in placement drives and coordinating student–recruiter interactions.",
      "Managed logistics for recruitment drives and ensured smooth conduct of interviews.",
    ],
    achievements: [
      "Assisting in placement drives and coordinating student–recruiter interactions.",
    ],
    skills: ["Google Cloud"],
    companyUrl: "https://www.iiitdm.ac.in/",
    logo: "/experience/iiitdm.png.jpeg",
  },
];

import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "C",
    description: "General-purpose, procedural computer programming language.",
    rating: 5,
    icon: Icons.c,
  },
  {
    name: "C++",
    description: "General-purpose programming language created as an extension of the C programming language.",
    rating: 5,
    icon: Icons.cpp,
  },
  {
    name: "Python",
    description: "High-level, general-purpose programming language.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Javascript",
    description: "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "SQL",
    description: "Domain-specific language used in programming and designed for managing data held in a relational database management system.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Git",
    description: "Distributed version control system.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "GitHub",
    description: "Platform for hosting and collaborating on Git repositories.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "MySQL",
    description: "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    description: "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Node.js",
    description: "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    description: "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "React",
    description: "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);

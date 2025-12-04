import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "video-calling-app",
    companyName: "Video Calling & Messaging App",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Developed a full-stack real-time communication app with secure JWT authentication and responsive UI, supporting seamless one-to-one video and chat sessions.",
    websiteLink: "https://talknow-video-calls-2.onrender.com/",
    githubLink: "https://github.com/cs23b2009/TalkNow-video-calls.git",
    techStack: ["React", "Node.js", "Stream SDK", "JWT"],
    startDate: new Date("2024-01-01"), // Approximate date
    endDate: new Date("2024-03-01"), // Approximate date
    companyLogoImg: "/projects/talknow.png",
    pagesInfoArr: [
      {
        title: "Video Call Interface",
        description: "Seamless one-to-one video calling experience.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a full-stack real-time communication app with secure JWT authentication and responsive UI.",
        "Supports seamless one-to-one video and chat sessions using Stream SDK.",
      ],
      bullets: [
        "Developed a full-stack real-time communication app.",
        "Implemented secure JWT authentication.",
        "Created a responsive UI for seamless user experience.",
        "Integrated Stream SDK for high-quality video and chat.",
      ],
    },
  },
  {
    id: "url-shortener",
    companyName: "URL Shortener Web App",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Built an authenticated URL shortener handling 10K+ shortened links, with analytics dashboard and secure REST API integrations hosted on Render Cloud.",
    websiteLink: "https://url-shortner-dxbc.onrender.com/",
    githubLink: "https://github.com/cs23b2009/url-shortner.git",
    techStack: ["MERN Stack", "Render"],
    startDate: new Date("2024-04-01"), // Approximate date
    endDate: new Date("2024-05-01"), // Approximate date
    companyLogoImg: "/projects/url-shortener.png",
    pagesInfoArr: [
      {
        title: "Analytics Dashboard",
        description: "View analytics for shortened links.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built an authenticated URL shortener handling 10K+ shortened links.",
        "Features an analytics dashboard and secure REST API integrations.",
        "Hosted on Render Cloud for scalability.",
      ],
      bullets: [
        "Built an authenticated URL shortener handling 10K+ shortened links.",
        "Implemented analytics dashboard for tracking link usage.",
        "Secured REST API integrations.",
        "Hosted on Render Cloud.",
      ],
    },
  },
  {
    id: "job-portal",
    companyName: "Job Portal Application",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Created a role-based job platform enabling recruiters and applicants to manage listings, applications, and interviews, achieving 100\% CRUD coverage and data validation.",
    githubLink: "https://github.com/cs23b2009/job-portal.git",
    techStack: ["MERN Stack", "MongoDB", "express.js", "React", "Node.js"],
    startDate: new Date("2024-06-01"), // Approximate date
    endDate: new Date("2024-08-01"), // Approximate date
    companyLogoImg: "/projects/job-portal.png",
    pagesInfoArr: [
      {
        title: "Job Listings",
        description: "Browse and apply for jobs.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Created a role-based job platform enabling recruiters and applicants to manage listings, applications, and interviews.",
        "Achieved 100\% CRUD coverage and data validation.",
      ],
      bullets: [
        "Created a role-based job platform.",
        "Enabled recruiters and applicants to manage listings, applications, and interviews.",
        "Achieved 100\% CRUD coverage.",
        "Implemented robust data validation.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

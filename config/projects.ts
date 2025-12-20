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
  {
    id: "codesync-pro",
    companyName: "CodeSync Pro — Advanced Contest Tracker",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Built a scalable competitive programming analytics platform aggregating real-time contest and user performance data from 3+ platforms using Next.js 15 and TypeScript.",
    websiteLink: "https://codesync-xgdu.onrender.com/",
    githubLink: "https://github.com/cs23b2009/CodeSync",
    techStack: ["Next.js 15", "TypeScript", "MongoDB", "TanStack Query", "Recharts"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-10-15"),
    companyLogoImg: "/projects/codesync.png",
    pagesInfoArr: [
      {
        title: "Contest Dashboard",
        description: "Interactive dashboards showing real-time contest data.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built a scalable competitive programming analytics platform aggregating real-time contest and user performance data from 3+ platforms using Next.js 15 and TypeScript.",
        "Improved performance and engagement by integrating TanStack Query, interactive dashboards (Recharts), and automated email notifications, reducing API calls by 70%.",
      ],
      bullets: [
        "Aggregated real-time contest data from 3+ platforms.",
        "Integrated TanStack Query for efficient data fetching.",
        "Created interactive dashboards using Recharts.",
        "Implemented automated email notifications.",
        "Reduced API calls by 70% through optimized caching.",
      ],
    },
  },
  {
    id: "medical-imaging-engine",
    companyName: "Medical Imaging Analysis Engine",
    type: "Personal",
    category: ["Machine Learning", "Artificial Intelligence", "Data Science"],
    shortDescription:
      "Engineered an end-to-end medical imaging pipeline comparing Traditional ML (HOG + Random Forest) with Deep Learning (DenseNet121) for multi-label chest X-ray pathology detection.",
    websiteLink: "https://xray-ml-dl.streamlit.app/",
    githubLink: "https://github.com/cs23b2009/Deep-Learning-Chest-XRay",
    techStack: ["Python", "PyTorch", "Scikit-Learn", "OpenCV", "Streamlit"],
    startDate: new Date("2024-10-15"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/projects/medical-imaging.png",
    pagesInfoArr: [
      {
        title: "Pathology Detection",
        description: "Real-time inference for chest X-ray pathology detection.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Engineered an end-to-end medical imaging pipeline comparing Traditional ML (HOG + Random Forest) with Deep Learning (DenseNet121) for multi-label chest X-ray pathology detection.",
        "Achieved up to 95% AUC on critical conditions (e.g., Edema), demonstrating a 35% performance gain of representation learning over handcrafted features.",
        "Deployed a clinician-facing Streamlit app for real-time inference.",
      ],
      bullets: [
        "Compared Traditional ML with Deep Learning (DenseNet121).",
        "Achieved 95% AUC on critical medical conditions.",
        "Demonstrated 35% performance gain using representation learning.",
        "Developed and deployed a clinician-facing Streamlit application.",
      ],
    },
  },
  {
    id: "agriyield-predictor",
    companyName: "AgriYield Predictor: Next-Gen Crop Intelligence",
    type: "Personal",
    category: ["Machine Learning", "Data Science"],
    shortDescription:
      "Transforming precision agriculture through production-grade ML engineering, featuring real-time yield forecasting and comprehensive climate-aware analysis.",
    websiteLink: "https://agriml.streamlit.app/",
    githubLink: "https://github.com/cs23b2009/Agri-Production-ML",
    techStack: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Streamlit"],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2024-12-19"),
    companyLogoImg: "/projects/agri-yield.png",
    pagesInfoArr: [
      {
        title: "Yield Forecasting",
        description: "Instant estimation of crop productivity (t/ha).",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed as part of the Infosys Springboard AI Project, this system represents a full-scale architectural transformation of a traditional ML experiment into a robust production application.",
        "Features real-time yield forecasting considering soil analysis (N, P, K, pH) and climate-aware patterns (Temperature, Humidity, Rainfall).",
        "Includes a production-grade layout with modular architecture and optimized inference services.",
      ],
      bullets: [
        "Modularized monolithic ML code into a scalable src package.",
        "Implemented real-time yield forecasting (t/ha).",
        "Integrated soil analysis and climate-aware data patterns.",
        "Developed an interactive dashboard for model performance comparison.",
        "Achieved high interpretability and robust performance on agricultural datasets.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

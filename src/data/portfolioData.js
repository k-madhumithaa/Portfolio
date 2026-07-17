export const profile = {
  name: "K Madhumitha",
  role: "Full-Stack Developer · AI & Computer Vision",
  tagline:
    "Building AI-powered applications at the intersection of vision, data, and the web.",
  location: "Bangalore, Karnataka, India",
  email: "madhumithakarthikeyan2005@gmail.com",
  phone: "+91 8310370296",
  linkedin: "https://linkedin.com/in/k-madhumitha-40b920295",
  github: "https://github.com/k-madhumithaa",
  resumeUrl: "/resume/K_Madhumitha_Resume.pdf",
  rotatingRoles: [
    "Full-Stack Developer",
    "Computer Vision Researcher",
    "React Engineer",
  ],
  about: [
    "Computer Science student with a strong interest in Full-Stack Development, Artificial Intelligence, and Computer Vision.",
    "Experienced in building full-stack applications and implementing machine learning models using Python, React, SQL, and modern web technologies.",
    "Seeking opportunities to contribute to innovative and impactful projects.",
  ],
};

export const experience = [
  {
    role: "Research Intern",
    org: "Indian Space Research Organisation (ISRO)",
    period: "04/2026 – 05/2026",
    location: "Bangalore, India",
    points: [
      "Researched vision-based satellite pose estimation techniques and analyzed multiple deep learning research papers focused on computer vision and object detection.",
      "Implemented, trained, validated, and compared YOLOv8 and RF-DETR models on satellite datasets, achieving comparable accuracy through performance metrics evaluation.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Pinnacle Labs",
    period: "06/2025 – 07/2025",
    location: "Bangalore, India",
    points: [
      "Developed two full-stack AI applications: a grammar correction tool (Python, Flask, Hugging Face) and a voice-enabled translator (Google Gemini API).",
      "Designed responsive UIs for both projects with Tailwind CSS and collaborated in a remote, agile environment using Git for version control.",
    ],
  },
];

// Ordered oldest -> newest; Education section renders as an ascending orbital path
export const education = [
  {
    id: "school",
    level: "Secondary School (10th)",
    institution: "Indiranagar Cambridge School",
    detail: "95%",
    period: "2011 – 2021",
  },
  {
    id: "puc",
    level: "Pre-University (12th) · PCMB",
    institution: "Miranda Composite PU College",
    detail: "87%",
    period: "2021 – 2023",
  },
  {
    id: "btech",
    level: "B.E. Computer Science & Engineering",
    institution: "Cambridge Institute of Technology",
    detail: "In progress",
    period: "2023 – 2027",
  },
];

export const skills = {
  languages: ["JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "Java", "Python"],
  databases: ["Supabase", "MySQL", "MongoDB"],
  frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "YOLOv8",
    "RF-DETR",
    "OpenCV",
  ],
  tools: ["Git", "GitHub", "Netlify", "Canva", "Jupyter Notebook"],
};

export const projects = [
  {
    id: "novelnest",
    name: "NovelNest",
    period: "12/2025 – 01/2026",
    image: "/projects/novelnest.png", // Path points directly to the public folder
    description:
      "Full-stack multi-user content platform with secure authentication, role-based access control, approval workflows, and real-time cloud data management.",
    points: [
      "Interactive reading experience: PDF viewing, bookmarking, progress tracking, filtering.",
      "Moderated commenting system built on Supabase Row Level Security.",
    ],
    stack: ["React.js", "Tailwind CSS", "Supabase", "Row Level Security"],
    github: "https://github.com/k-madhumithaa/NovelNest", // Your GitHub repository link
    live: "https://novelnestlibraryy.netlify.app/",               // Your hosted live demo link
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    period: "09/2025 – 11/2025",
    image: "/projects/expense-tracker.png", 
    description:
      "Secure full-stack expense management app with multi-account transaction tracking, recurring payment automation, and interactive financial analytics.",
    points: [
      "Searchable transaction history with pagination and CSV import/export.",
      "Dynamic Chart.js visualizations and budgeting alerts.",
    ],
    stack: ["MERN Stack", "JWT Auth", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/k-madhumithaa/ExpenseTracker",
    live: "https://expensetracker1212.netlify.app/",
  },
  {
    id: "resume-builder",
    name: "Resume Builder",
    period: "07/2025",
    image: "/projects/resume-builder.png",
    description:
      "Built at Suprathon (SuPrazo Technologies & CodeElevate Academy) — lets users quickly create, edit, and customize professional resumes.",
    points: ["Responsive, scalable design deployed on Netlify."],
    stack: ["React", "Tailwind CSS", "Netlify"],
    github: "https://github.com/k-madhumithaa/resume-builder-app",
    live: "https://resume-builder.netlify.app/",
  },
];
export const certifications = [
  "Data Science using Python — Infosys Springboard",
  "Frontend Development — Infosys Springboard",
  "Programming in Java (Elite) — NPTEL",
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
];

export const resumeData = {
  name: "Yash Prakash Pimpalkar",
  title: "Full Stack Developer",
  summary:
    "Full Stack Developer skilled in Next.js, React, TypeScript, Node.js, and MySQL. Experienced in building responsive web applications with clean, efficient code. Strong foundation in Java and C++, with a focus on performance, collaboration, and scalable solutions.",
  contact: {
    email: "yashpimpalkar214@gmail.com",
    phone: "9619456269",
    linkedin: "https://www.linkedin.com/in/yashpimpalkar/",
    github: "github.com/YashPimpalkar",
    location: "Kurla West, Mumbai, India 400070",
  },
  experience: [
    {
      company: "Spinach Experience Design",
      role: "Intern - Frontend",
      date: "05/2025-07/2025",
      location: "Mumbai, India (Onsite)",
      description: [
        "Developed fully responsive web applications using Next.js, TypeScript, and Tailwind CSS.",
        "Integrated pixel-perfect UI designs from Zeplin, ensuring high visual fidelity.",
        "Implemented advanced UI animations using GSAP and Framer Motion to enhance user experience.",
        "Reduced page load by 90% by replacing 1MB videos with 100KB animated SVGs for interactivity.",
        "Collaborated with agile teams using JIRA for sprint planning and task tracking.",
      ],
    },
    {
      company: "Getfly Technologies",
      role: "Intern - Backend",
      date: "06/2024-07/2024",
      location: "Mumbai, India (Hybrid)",
      description: [
        "Developed backend services using Node.js, MySQL, and REST APIs.",
        "Improved database efficiency by 50% through query and schema optimization.",
        "Integrated backend APIs with frontend for smooth data flow.",
        "Participated in daily stand-ups and sprint planning in an agile team.",
      ],
    },
  ],
  skills: {
    Frontend: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "JavaScript",
      "GSAP",
      "Framer Motion",
      "Flutter",
    ],
    Backend: ["Node.js", "Python", "Java", "C/C++", "Express", "Django"],
    Databases: ["MySQL", "MongoDB", "Firebase"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Jira",
      "Zeplin",
      "AWS",
      "DevOps",
      "VS Code",
      "Android Studio",
    ],
  },
  projects: [
    {
      title: "IdeaMagix (Lead Management System)",
      date: "12/2025",
      description:
        "A professional Lead Management System designed for IdeaMagix, featuring a secure Super Admin dashboard for managing clients, leads, and staff assignments.",
      github: "https://github.com/YashPimpalkar/ideamagix",
      live: "https://yash-ideamagix.vercel.app/",
      technologies: [
        "Angular",
        "Spring Boot",
        "Java",
        "MySQL",
        "REST API",
        "TypeScript",
      ],
    },
    {
      title: "Delivery Management System",
      date: "10/2025",
      description:
        "A comprehensive solution for managing deliveries and tracking orders, with a focus on administrative control and user-friendly tracking.",
      github: "https://github.com/YashPimpalkar/deliver-management",
      live: "https://manage-delivery.vercel.app/",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Task Tracker",
      date: "04/2025",
      description:
        "A functional Task Tracker app with CRUD operations, enabling users to organize their professional and personal tasks efficiently.",
      github: "https://github.com/YashPimpalkar/task-tracker",
      live: "https://task-tracker-yash.vercel.app",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "GenAI Chatbot",
      date: "10/2025",
      description:
        "A conversational AI chatbot that leverages the Groq API and Streamlit to provide fast, AI-driven responses to user queries.",
      github: "https://github.com/YashPimpalkar/ChatBot-Steamlit",
      live: "https://gen-ai-chatbot-yash.streamlit.app/",
      technologies: ["Python", "Streamlit", "Groq API", "GenAI"],
    },
    {
      title: "OBE: Outcome-Based Education (Industry Level Project)",
      date: "07/2024-02/2025",
      description:
        "Developed a comprehensive Outcome-Based Education (OBE) software solution to help educational institutions define, track, and assess educational goals. The system analyzes student progress in detail and provides actionable insights to improve overall learning outcomes.",
      github: "https://github.com/YashPimpalkar/maplms-25",
      live: "https://github.com/YashPimpalkar/maplms-25",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Django",
        "Python",
        "SQLlite",
      ],
    },
    {
      title: "Fitness App",
      date: "",
      description:
        "Engineered a dynamic web application using React.js and Rapid API to display animated workout routines. Focused on creating a responsive and engaging user interface to guide users through various fitness exercises.",
      github: "https://github.com/YashPimpalkar/fitness-advance",
      live: "https://fitness-club-silk.netlify.app/",
      technologies: ["React", "Rapid API", "Material UI", "Firebase"],
    },
    {
      title: "Modern Dictionary",
      date: "",
      description:
        "A modern dictionary web application built with Django and web scraping. It provides meanings, synonyms, antonyms, and usage examples for searched words. Features include a chatbot, JavaScript games, blog section, and Google Translate integration.",
      github: "https://github.com/YashPimpalkar/ModernDictionary",
      live: "https://moderndictionary.vercel.app/",
      technologies: [
        "Django",
        "Python",
        "BeautifulSoup",
        "JavaScript",
        "HTML",
        "CSS",
        "Material UI",
        "Google Translate API",
      ],
    },
    {
      title: "MentorMentee Management System",
      date: "",
      description:
        "A web platform where HOD assigns mentors and mentees. Mentors can track and manage their assigned mentees, while mentees can fill out personal and academic forms, and upload resumes and result documents for streamlined academic mentoring.",
      github: "https://github.com/YashPimpalkar/mentormentee",
      live: "",
      technologies: ["React", "Node.js", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Perficio Company Website",
      date: "",
      description:
        "A basic company website built using Next.js and TypeScript with support for user and admin roles. Features include blog management, OAuth authentication, PDF uploads, and Cloudinary integration for image storage.",
      github: "https://github.com/Yash-Pimpalkar/perificio.auth",
      live: "https://perficio.vercel.app/",
      technologies: [
        "Next.js",
        "TypeScript",
        "OAuth",
        "Cloudinary",
        "Tailwind CSS",
        "React",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      title: "Shanaaz Masala Website (UI Only)",
      date: "",
      description:
        "A fully responsive UI design for a food products brand, built using React and Tailwind CSS. Includes homepage sections for products, about, contact, and banners tailored for a masala product website.",
      github: "https://github.com/YashPimpalkar/shanaaz-masala",
      live: "https://shanaaz-masala.netlify.app/",
      technologies: ["React", "Tailwind CSS"],
    },
  ],

  education: [
    {
      degree: "Computer Engineering",
      school:
        "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts",
      link: "#", // Placeholder link
      cgpa: "7.57 CGPA",
      date: "2022-2025",
    },
    {
      degree: "Diploma In Computer Engineering",
      school: "Government Polytechnic Mumbai",
      link: "#", // Placeholder link
      percentage: "90.75%",
      date: "2019-2022",
    },
    {
      degree: "SSC",
      school: "D. S. High School",
      link: "#", // Placeholder link
      percentage: "82.4%",
      date: "2018-2019",
    },
  ],
  certifications: [
    {
      name: "Java (Basic)",
      issuer: "HackerRank",
      link: "#", // Placeholder link
    },
    {
      name: "Java",
      issuer: "Great Learning Academy",
      link: "#", // Placeholder link
    },
    {
      name: "Java Training Program",
      issuer: "TNS India Foundation",
      link: "#", // Placeholder link
    },
  ],
};

// Icon components (using simple inline SVGs)
export const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22s-4-4-6-6v-2c-1.333-1-3-2-3-4a5 5 0 0 1 5-5c1 0 2 1 3 1s2-1 3-1a5 5 0 0 1 5 5c0 2-1.667 3-3 4v2c2 2 6 6 6 6H15z" />
    <path d="M9 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4" />
  </svg>
);

export const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-phone"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-menu"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/* Portfolio data for Đỗ Trần Phúc Hậu */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1800
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Hậu",
  title: "Hi, I'm Đỗ Trần Phúc Hậu",
  subTitle: emoji(
    "Fullstack Developer with nearly 1.5 years of part-time startup experience, building practical web products with React, Node.js, Express, TypeScript, and MongoDB."
  ),
  profileImage: require("./assets/images/hau-profile.png"),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Hause173226",
  linkedin: "",
  gmail: "dotranphuchau@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I build",
  subTitle:
    "I work across frontend screens, backend APIs, database models, dashboards, social flows, and automation features.",
  skills: [
    emoji("⚡ Build React and TypeScript interfaces for dashboards, product flows, auth states, and API-driven pages."),
    emoji("⚡ Develop Express and MongoDB APIs with JWT auth, middleware, validation, Swagger documentation, and payment/service integrations."),
    emoji("⚡ Connect frontend and backend features in a startup environment where requirements move fast and product behavior matters.")
  ],
  softwareSkills: [
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "API",
      fontAwesomeClassname: "fas fa-plug"
    }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "React / Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "Node.js / Express APIs",
      progressPercentage: "78%"
    },
    {
      Stack: "MongoDB / Integration",
      progressPercentage: "72%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Fullstack Developer, Part-time",
      company: "Startup Product Team",
      companylogo: require("./assets/images/hau-hero-workspace.png"),
      date: "Nearly 1.5 years",
      desc:
        "Contributed selected frontend and backend features for a React and Node.js platform, including admin dashboard modules, social connection flows, and automation workflows for publishing posts to social platforms.",
      descBullets: [
        "Built admin dashboard screens and integrated them with REST APIs.",
        "Worked on friend request and connection acceptance flows.",
        "Developed backend API features using Express, TypeScript, and MongoDB.",
        "Contributed to automation features for posting to LinkedIn and Facebook."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Source-backed case studies showing backend systems, frontend product work, and AI automation experiments.",
  projects: [
    {
      image: require("./assets/images/cover-ev-platform-api.svg"),
      projectName: "Second Hand EV Platform API",
      projectDesc:
        "Marketplace backend API for second-hand electric vehicle and battery trading with auth, listings, orders, offers, auctions, deposits, wallet, payments, chat, notifications, contracts, eKYC, moderation, Cloudinary, and Swagger.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Hause173226/be-second-hand-ev-platform"
        }
      ]
    },
    {
      image: require("./assets/images/cover-student-gamer-hub.svg"),
      projectName: "Student Gamer Hub",
      projectDesc:
        "React + TypeScript frontend for a student gaming community platform with dashboard, events, clubs, communities, friends, auth, SignalR chat, room chat, and audio/video calling.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Hause173226/FE-student-gamer-hub"
        }
      ]
    },
    {
      image: require("./assets/images/cover-bus-ticket-api.svg"),
      projectName: "Bus Ticket Sales System API",
      projectDesc:
        "Express + MongoDB backend for interprovincial bus ticket sales, covering buses, drivers, routes, stations, trips, seats, bookings, tickets, users, Firebase upload, Swagger, and payment workflows.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Hause173226/BEBusTicketSalesSystem"
        }
      ]
    },
    {
      image: require("./assets/images/cover-llm-testflow.svg"),
      projectName: "LLM API Test Generator",
      projectDesc:
        "AI-assisted API testing frontend with project management, API specifications, endpoints, test suites, reports, manual request builder, Monaco editor, SignalR updates, Gemini integration, and Vitest coverage. External AI/n8n automation is currently inactive.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Hause173226/llm-api-test-generator"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Technical Highlights"),
  subtitle:
    "The things I want HR and engineering reviewers to notice first.",
  achievementsCards: [
    {
      title: "Fullstack Product Delivery",
      subtitle:
        "Hands-on experience connecting React interfaces with Express APIs and MongoDB data models in real product flows.",
      image: require("./assets/images/highlight-fullstack.svg"),
      imageAlt: "Fullstack product delivery",
      footerLink: []
    },
    {
      title: "Backend Systems",
      subtitle:
        "Worked with authentication, payments, booking flows, marketplace logic, file upload, Swagger docs, and service integrations.",
      image: require("./assets/images/highlight-backend.svg"),
      imageAlt: "Backend systems",
      footerLink: []
    },
    {
      title: "AI and Automation",
      subtitle:
        "Explored LLM-assisted API testing, suggestion review, manual request building, and automation workflows.",
      image: require("./assets/images/highlight-ai-automation.svg"),
      imageAlt: "AI automation",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Notes",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Open to Fullstack Developer and Frontend Developer opportunities. This portfolio is currently used instead of an updated CV.",
  number: "",
  email_address: "dotranphuchau@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

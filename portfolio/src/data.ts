import { Education, Project, Certification, Experience, SkillGroup } from './types';

export const personalInfo = {
  firstName: "Hemakanth",
  lastName: "Reddy",
  fullName: "Hemakanth Reddy Chinthapanti",
  tagline: "Electronics & Communication Engineering | Aspiring Software Developer",
  shortBio: "I am a passionate aspiring developer bridging the gap between hardware analysis and full-stack software development. With a foundation in Electronics & Communication and a focus on writing clean, efficient code, I build responsive web apps, IoT integrations, and interactive systems.",
  longBio: "I am a passionate software developer and ECE undergraduate dedicated to crafting dynamic, reliable, and responsive applications. My portfolio showcases a blend of hardware-software IoT integrations, modern front-end designs, and full-stack implementations. Feel free to explore my work and reach out for collaborations or job opportunities.",
  email: "hemakanthreddy916@gmail.com",
  phone: "+91 9182877353",
  address: "Andhra Pradesh, India",
  linkedin: "https://linkedin.com/in/hemakanth-reddy-5967803a6",
  github: "https://github.com/Hemakanthreddy",
};

export const educationList: Education[] = [
  {
    institution: "Annamacharya Institute of Technology & Science, Rajampet",
    degree: "B.Tech – Electronics and Communication Engineering",
    period: "2023 – Present",
    score: "73.4% CGPA"
  },
  {
    institution: "Narayana Junior College, Ananthapur",
    degree: "Intermediate (MPC) – Maths, Physics, Chemistry",
    period: "2021 – 2023",
    score: "89.4%"
  },
  {
    institution: "Z.P High School, Talamarla",
    degree: "SSC – Andhra Pradesh Board of Secondary Education",
    period: "2020 – 2021",
    score: "96.5%"
  }
];

export const experienceList: Experience[] = [
  {
    title: "Full Stack Web Development",
    organization: "Training / Academic Practice",
    period: "Currently Ongoing",
    currentlyOngoing: true,
    description: [
      "Building a YouTube-inspired web application using React, Node.js, and MySQL, implementing features like video listing and search functionality.",
      "Gained hands-on experience with full-stack development by integrating REST APIs and managing frontend-backend communication throughout the project lifecycle."
    ]
  },
  {
    title: "Embedded Systems & IoT",
    organization: "Academic Training",
    period: "Currently Ongoing",
    currentlyOngoing: true,
    description: [
      "Gaining practical experience in embedded C programming, microcontroller interfacing, and IoT protocol stacks.",
      "Working on real-time sensor data acquisition and wireless data transmission modules."
    ]
  }
];

export const projectsList: Project[] = [
  {
    title: "Automated IoT Irrigation System",
    role: "IoT & Embedded Developer",
    technologies: ["Python", "Sensor Networks", "IoT", "Microcontrollers"],
    imageType: "irrigation",
    description: [
      "Designed and developed an automated irrigation system using IoT sensor networks to capture real-time soil moisture and environmental data.",
      "Integrated hardware sensors with Python-based control logic, enabling data-driven irrigation decisions and reducing manual intervention.",
      "Applied embedded system principles for hardware-software integration, ensuring reliable sensor communication and actuator control."
    ]
  },
  {
    title: "Naye Pankh Foundation Web Page Design",
    role: "Front-End Developer (Assignment Task)",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    imageType: "nayepankh",
    description: [
      "Successfully developed a high-fidelity front-end web page assigned as a technical challenge for the Naye Pankh Foundation, focusing on pixel-perfect layouts.",
      "Built clean semantic HTML, custom CSS styling, and active JavaScript interactions to deliver a highly engaging, intuitive user presentation.",
      "Ensured maximum speed optimization and fully responsive grid adjustments across all mobile, tablet, and desktop browser viewports."
    ]
  },
  {
    title: "Coalition Technologies Front-End Challenge",
    role: "Front-End Developer (Assignment Task)",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    imageType: "coalition",
    description: [
      "Successfully completed a professional front-end design challenge assigned by Coalition Technologies, translating strict technical specifications into highly readable source code.",
      "Implemented clean semantic markup with HTML5, elegant custom stylesheets with CSS3, and interactive browser actions with native JavaScript.",
      "Ensured strict cross-browser compatibility, seamless layout alignment, and high-performance asset loading."
    ]
  },
  {
    title: "PCB Design & Prototype Development",
    role: "Hardware Design Trainee",
    technologies: ["Hardware Engineering", "PCB Schematic", "Soldering", "Circuit Debugging"],
    imageType: "pcb",
    description: [
      "Completed hands-on training in PCB design covering full workflow: schematic design, PCB layout, component soldering, and functional prototype testing.",
      "Gained practical exposure to signal integrity concepts and hardware debugging methodologies."
    ]
  }
];

export const certificationsList: Certification[] = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google / Coursera",
    id: "QSQGZLKV5O0Z"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services"
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    id: "5917CCDEDE87"
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    id: "0C2003906FA3"
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM / Cognitive Class",
    id: "1cfcc3aa76384a52a93a9fbfaff01864"
  },
  {
    title: "Python",
    issuer: "freeCodeCamp",
    id: "hemakanth-pyv9"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    id: "hemakanth-rwdv9"
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    id: "f83403de8533"
  },
  {
    title: "Software Development Job Simulation",
    issuer: "Datacom",
    id: "bL2ed49RqpJqduouA"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    id: "qRrd6M2KChNvkgfhc"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python (Primary)", "HTML", "CSS", "JavaScript", "C (Basics)"]
  },
  {
    category: "Database",
    skills: ["MySQL", "SQL and Relational Database design"]
  },
  {
    category: "AI & Modern Tools",
    skills: ["Google AI (Gemini)", "Prompt Engineering", "AI-assisted development"]
  },
  {
    category: "Development Tools & Systems",
    skills: ["VS Code", "IDLE", "Windows OS"]
  },
  {
    category: "Productivity",
    skills: ["MS Excel", "MS PowerPoint"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Team Collaboration", "Communication", "Adaptability", "Project Management", "Time Management"]
  }
];

export const languages = ["English (native / professional)", "Telugu (native)", "Hindi (proficient)"];

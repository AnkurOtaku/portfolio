export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Resume", href: "/assets/Ankur's Resume.pdf" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Work", href: "#work" },
  { id: 5, name: "Contact", href: "#contact" },
];

export const myEducation = [
  {
    id: 1,
    title: 'Graduation',
    organisation: 'Maharishi Dayanand University',
    finishinYear: 2024,
    specialisation: 'B.Sc. (Computer Science)'
  },
  {
    id: 2,
    title: 'Backend Course',
    organisation: 'Coursera',
    marks: '95',
    finishinYear: 2022,
    specialisation: 'Django, Mongo DB'
  },
  {
    id: 3,
    title: 'Full Stack Course',
    organisation: 'Coursera',
    marks: '98',
    finishinYear: 2023,
    specialisation: 'Kubernetis, cloud'
  },
]

export const clientReviews = [
  {
    id: 1,
    name: "Seema Agarwal",
    position: "SEO Head Director at AggarwalFreelancer",
    img: "assets/review1.png",
    review:
      "Working with Ankur was a fantastic experience. Consistently demonstrates strong SEO optimization skills with precision and efficiency ",
  },
];

export const myProjects = [
  {
    title: "Natural Apothecary - Full-Stack Web App",
    desc: "Natural Apothecary is a full-stack web application that allows users to manage and view natural remedies, boosters, poisons, including their ingredients, recipes, and other details. Built using the MERN stack with Zustand for state management and Vite for the frontend.",
    subdesc:
      "Developed with MongoDB, Express, React, and Node.js (MERN), Natural Apothecary features a dynamic and responsive UI, a RESTful API backend, and a production-ready build serving static frontend files.",
    href: "https://natures-apothecary.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/natural-remedies-logo.png",
    logoStyle: {
      backgroundColor: "#1A3D2F",
      border: "0.2px solid #28543D",
      boxShadow: "0px 0px 60px 0px #4CAF5080",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
      { id: 3, name: "Node.js", path: "/assets/nodejs.png" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.png" },
      { id: 5, name: "Vite", path: "/assets/vite.png" },
    ],
  },
  {
    title: "Live News + Weather App",
    desc: "The Live News + Weather App is your one-stop destination for the latest news worldwide and real-time weather updates. With powerful search capabilities and live location support, staying informed has never been easier or more convenient!",
    subdesc:
      "Stay updated with the latest global news and real-time weather updates. Built with React and Tailwind CSS, this app offers a seamless user experience with a clean UI and enhanced responsiveness.",
    href: "https://news-app-ankurotaku.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/live-news-weather-logo.png",
    logoStyle: {
      backgroundColor: "rgba(184, 92, 92, 0.6)",
      border: "0.2px solid #D17A7A",
      boxShadow: "0px 0px 60px 0px #E6A4A480",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "API Integration", path: "/assets/api.png" },
      { id: 4, name: "Responsive Design", path: "/assets/responsive.png" },
    ],
  },
  {
    title: "Task Manager Application",
    desc: "This is a Task Manager Application built with React, JavaScript, and Tailwind CSS. It helps users manage tasks efficiently by allowing them to add, delete, and mark tasks as complete. Users can also prioritize and sort tasks, and utilize a search feature to locate specific tasks.",
    subdesc:
      "Designed for efficient task management, this app offers task input, deletion, completion marking, priority setting, and sorting. Tasks persist using local storage, ensuring they remain available after page reloads.",
    href: "https://task-management-lac-tau.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/task-manager-logo.png",
    logoStyle: {
      backgroundColor: "rgba(173, 216, 230, 0.6)",
      border: "0.2px solid rgba(135, 206, 250, 0.7)",
      boxShadow: "0px 0px 60px 0px rgba(135, 206, 250, 0.8)",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "Responsive Design", path: "/assets/responsive.png" },
      { id: 4, name: "Git", path: "/assets/git.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "SEO",
    pos: "Search Engine Optimiser",
    duration: "April 2024 - Oct 2024",
    title:
      "SEO has helped my career by improving website visibility, driving organic traffic, and enhancing user engagement. I’ve learned keyword strategies, technical SEO, and analytics, strengthening my skills in digital marketing and web development.",
    icon: "/assets/seo.svg",
    animation: "clapping",
  },
  {
    id: 2,
    name: "National Stock Exchange",
    pos: "Frontline Operationist Intern",
    duration: "Nov 2024 - Present",
    title:
      "As Frontline Operationist, I get to work with senior developers and learning from them on real world projects. Attending meetings and it's a path to constant learning and improving my skills.",
    icon: "/assets/nse.png",
    animation: "victory",
  },
];

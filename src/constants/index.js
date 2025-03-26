export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Education", href: "#education" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Work", href: "#work" },
  { id: 6, name: "Contact", href: "#contact" },
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
  // {
  //   id: 2,
  //   name: 'Mark Rogers',
  //   position: 'Founder of TechGear Shop',
  //   img: 'assets/review2.png',
  //   review:
  //     'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  // },
  // {
  //   id: 3,
  //   name: 'John Dohsas',
  //   position: 'Project Manager at UrbanTech ',
  //   img: 'assets/review3.png',
  //   review:
  //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  // },
  // {
  //   id: 4,
  //   name: 'Ether Smith',
  //   position: 'CEO of BrightStar Enterprises',
  //   img: 'assets/review4.png',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  // },
];

export const myProjects = [
  {
    title: "Natural Remedies - Full-Stack Web App",
    desc: "Natural Remedies is a full-stack web application that allows users to manage and view natural remedies, including their ingredients, recipes, and other details. Built using the MERN stack with Zustand for state management and Vite for the frontend.",
    subdesc:
      "Developed with MongoDB, Express, React, and Node.js (MERN), Natural Remedies features a dynamic and responsive UI, a RESTful API backend, and a production-ready build serving static frontend files.",
    href: "https://natural-remedies-qh2t.onrender.com/",
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
    texture: "/textures/project/project3.mp4",
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
    duration: "Sep 2024 - Feb 2025",
    title:
      "SEO has helped my career by improving website visibility, driving organic traffic, and enhancing user engagement. I’ve learned keyword strategies, technical SEO, and analytics, strengthening my skills in digital marketing and web development.",
    icon: "/assets/seo.svg",
    animation: "clapping",
  },
  {
    id: 2,
    name: "National Stock Exchange",
    pos: "Frontline Operationist Intern",
    duration: "2024 - Present",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/nse.png",
    animation: "victory",
  },
];

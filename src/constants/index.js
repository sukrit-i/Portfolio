import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  c,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
    {
      title: "Frontend Developer",
      icon: backend,
    },
  ];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
  {
    title: "Programming skills",
    icon: web,
    iconBg: "#383E56",
    points: [
      "Programming languages: I am proficient in Java,JavaScript and C++.",
      "Data structures and algorithms: I am familiar with a variety of data structures and algorithms. I have used these data structures and algorithms to solve a variety of problems in my projects.",
      "Software development principles: I am familiar with a number of software development principles, such as the Agile Manifesto and the Clean Code principles. I have applied these principles to my projects to create high-quality software.",
      "Version control systems: I am familiar with Git and GitHub. I have used these version control systems to manage my code and to collaborate with others on projects.",
    ],
  },
  {
    title: "Front-end Developer",
    icon: web,
    iconBg: "#383E56",
    points: [
      "HTML: I am proficient in HTML and I have a strong understanding of the HTML5 standard. I am able to use HTML to create well-structured and semantic web pages.",
      "CSS: I am proficient in CSS and I have a strong understanding of CSS3. I am able to use CSS to style web pages in a way that is both visually appealing and user-friendly.",
      "JavaScript: I am proficient in JavaScript and I have a strong understanding of the ES6 standard. I am able to use JavaScript to add interactivity to web pages.",
      "Front-end frameworks: I am familiar with front-end frameworks React and Vue.js. I have used these frameworks to create complex web pages with minimal code.",
      "Web design principles: I have a strong understanding of web design principles and I am able to apply these principles to create visually appealing and user-friendly web pages.",
    ],
  },
 
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };

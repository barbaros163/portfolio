import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  carrent,
} from "../assets";

import clarusway from "../assets/company/clarusway.png";
import john from "../assets/company/john.png";
import survey from "../assets/survey.gif";
import parallax from "../assets/parallax.gif";
import sass from "../assets/sass.gif";
import bootstrap1 from "../assets/bootstrap1.gif";
import bootstrap2 from "../assets/bootstrap2.gif";
import tourplaces from "../assets/tour-places.gif";
import languagecards from "../assets/language-cards.gif";
import recipe from "../assets/recipe.gif";
import firecontact from "../assets/firecontact.gif";
import movieapp from "../assets/movie-app.gif";
import weather from "../assets/weather_app.gif";
import checkout from "../assets/checkout.gif";
import todo from "../assets/todo.gif";

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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
];

const experiences = [
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    company_name: "Coursera / Johns Hopkins University",
    icon: john,
    iconBg: "#fff",
    date: "August 2020 - Februar 2021",
    points: [
      "Developing and maintaining web applications using Html, Css and Javascript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Bootcamp / Clarusway",
    icon: clarusway,
    iconBg: "#fff",
    date: "July 2022 - December 2022",
    points: [
      "Worked with a team of 5 developers to develop websites and applications adhering to deadlines %100",
      "Developed 25+ new product features designed 5+ websites with HTML, CSS, SASS, Bootstrap, Material.UI, Tailwind codes and Increased client satisfaction scores by 30%",
      "Planned and developed RestfulAPIs web services to manipulate dynamic datasets using Python Django Framework and consumed APIs using async js structure.",
      "Applied state management throughout the projects using React States and Redux. Wrote 100+ unit and integration tests using Jest.js.",
      "Studied on Computational Thinking, Operating Systems, Version Control Systems(Git & GitHub), used SCRUM & Agile methodologies and JIRA while working on individual & group projects.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Survey Form",
    description:
      "A simple functionally Netflix Survey Form. With this project, following topics are to be covered. HTML Forms-Input Types I HTML Form Elements I CSS Colors-Border Properties I CSS Margins-Padding I Css Properties for Texts-Font Families-Links.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwindcss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: survey,
    source_code_link: "https://html-netflix.netlify.app/",
  },
  {
    name: "Parallax Webseite",
    description:
      "A simple functionally Landing Page. With this project, following topics are to be covered. HTML I List Properties I Overflow Property-The float Property-Opacity / Transparency-Units in CSS I CSS Setting height and width-CSS Outline-CSS Combinators.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: parallax,
    source_code_link:
      "https://barbaros163.github.io/20.08.2022_parallax_website/",
  },
  {
    name: "Sass Webseite",
    description:
      "A Simple Sass Portfolio Webseite. With this project, following topics are to be covered. HTML I CSS and Sass I What is Sass? Sass stands for Syntactically Awesome Stylesheet I Sass is an extension to CSS I Sass is a Css pre-processor. For more information about Sass visit the Sass official Webseite. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sass,
    source_code_link: "https://barbaros163.github.io/sass1_website/",
  },
  {
    name: "Bootstrap Webseite",
    description:
      "A simple Bootstrap One Page Template. With this project, following topics are to be covered. HTML I CSS and Bootstrap. What is Bootstrap and why it is used? Because it is on of the most popular CSS Framework for developing responsive and mobile-first websites. It is free and open source. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bootstrap1,
    source_code_link: "https://bootstrap-page-1.netlify.app/",
  },
  {
    name: "Bootstrap Webseite 2",
    description:
      "This is 2. Bootstrap One Page Template. With this project, following topics are to be covered. HTML I CSS and Bootstrap. There are a lot of differences between previos Bootstrap Template and this Template. For Example Topfixed Navbar ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bootstrap2,
    source_code_link: "https://bootstrap-page-2.netlify.app/",
  },
  {
    name: "React Tour Places",
    description:
      "A Tour Project App. With this project, following topics are to be covered. HTML I CSS I JavaScript I ReactJS. What is React and why use it? React allows you to interface with other libraries and frameworks. For more information visit the React official Webseite. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tourplaces,
    source_code_link: "https://barbaros163.github.io/01_Tour_Places_React/",
  },
  {
    name: "React Language Cards",
    description:
      "A Languages Cards App. With this project, following topics are to be covered. HTML I CSS I JavaScript I ReactJS. What is React and why use it? React allows you to interface with other libraries and frameworks. For more information visit the React official Webseite.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: languagecards,
    source_code_link: "https://barbaros163.github.io/02_Language_Cards_React/",
  },
  {
    name: "React Recipe App",
    description:
      "A Recipe App. With this project, following topics are to be covered. HTML I CSS I JavaScript I ReactJS. What is React and why use it? React allows you to interface with other libraries and frameworks. For more information visit the React official Webseite.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link:
      "https://barbaros163.github.io/05_Recipe_App_Solution_react/",
  },
  {
    name: "React Firecontact App",
    description:
      "A Firecontact App. With this project, following topics are to be covered. HTML I CSS I JavaScript I ReactJS and Google Firebase. What is React and why use it? React allows you to interface with other libraries and frameworks. For more information visit the React official Webseite.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: firecontact,
    source_code_link:
      "https://barbaros163.github.io/07_fire_contact_solution_react/",
  },
  {
    name: "React Movie App",
    description:
      "A Movie App. With this project, following topics are to be covered. HTML I CSS I JavaScript I ReactJS and Google Firebase. What is React and why use it? React allows you to interface with other libraries and frameworks. For more information visit the React official Webseite.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://barbaros163.github.io/06_movie_app_react/",
  },
  {
    name: "Weather App",
    description:
      "A Weather App. The Skills are HTML I CSS I JavaScript. This Project aims to display current weather data of searched city around the world with fetching Weather Api data. With this Project, you will be able to; analyze a problem, create a weather condition app populated with a real weather api.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://barbaros163.github.io/jQuery_js/weather.html",
  },
  {
    name: "Checkout Page",
    description:
      "A Checkout Page.  The Skills are HTML I CSS I JavaScript. This Project aims to create a real checkout page of e-commerce webseite. With this Project, you will be able to; demonstrate the knowledge of algorithmic design principles for dynamic calculation of product's cart. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: checkout,
    source_code_link: "https://barbaros163.github.io/01_checkout_page_js/",
  },
  {
    name: "Todo App",
    description:
      "A simple To-Do App. The Skills are HTML I CSS I JavaScript The Users can click plus / add button on to-do app and they can increase add new to-do task and they can also delete a to-do task. They can mark the selected to-do task as done and count of uncompleted task decrease 1.  ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://barbaros163.github.io/todo_solution_js/",
  },
];

export { services, technologies, experiences, testimonials, projects };

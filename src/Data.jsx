
import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandInstagram} from "@tabler/icons-react";
import c from '../src/assets/c.png';
import cpp from '../src/assets/cpp.png';
import java from '../src/assets/java.png';
import python from '../src/assets/python.png';
import html from '../src/assets/html.png';
import css from '../src/assets/css.png';
import javaScript from '../src/assets/javaScript.png';
import react from '../src/assets/react.png';
import cop from '../src/assets/cop.png';
import django from '../src/assets/django.png';
import tail from '../src/assets/tail.png';
import vite from '../src/assets/vite.png';
import image1 from '../src/assets/image1.png';
import image2 from '../src/assets/image2.png';


const Info = {
    name: "Fardeen Azim",
    stack: ["Developer", "Programmer"],
    bio: "Enthusiastic Software Engineering student with a strong foundation in full-stack development. Proficient in React, Tailwind CSS, Python, and Java, with expertise in developing scalable, responsive web applications and optimizing database management." }


const ProjectInfo = [
    {
        id: "1",
        title: "Url Shortener",
        description: "This is a the shortener project showcases a tool that transforms legthy URLs into concise, easy-to-share links. In this i have used html, css and javaScript. And i take the api of tiny Url in my project to shortened the Url. It refers the tiny url api to change the Url length longer to become shortener. In this short link the use of digits, alphabets, Uppercase, Lowercase and special symbols. Despite being short, they redirect users to the original, full-length URL.",
        image: image1,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://fardeenazim.github.io/Url-Shortener/",
        github: "https://github.com/FardeenAzim/Url-Shortener"
    },
    {  
        id: "2",
        title: "Text Analyzer",
        description: "The text analyzer project highlights a tool that processes and analyzes text data. It offers features like word count, change  the paragraph to Uppercase, Lowercase ,Copy and Clear text.I have used bootstrap to copy  the things which is required.  I have also added the preview and the minute counter that  notify us that how much time takes to read it. And i have added a dark mode feature on it to make it attractive.",
        image: image2,
        technologies: ["React", "Bootstrap"],
        link: "https://fardeenazim.github.io/Text-Analyzer/",
        github: "https://github.com/FardeenAzim/Text-Analyzer"
    },
    {  
      id: "3",
      title: "E-Commerce Website",
      description: "A Django-based e-commerce website is a full-fledged online shopping platform that enables users to browse products, add items to their cart, manage addresses, and complete purchases securely. Built using Django as the backend framework, it ensures scalability, security, and efficient database management. Users can browse and search for products with detailed descriptions and images.  Secure payment processing using Razorpay or other gateways.",
      image: image2,
      technologies: ["Django"],
      link: "https://fardeenazim.github.io/ecommerce/",
      github: "https://github.com/FardeenAzim/ecommerce"
  },
   
]


const cardItems = [
  {
    id: 1,
    logo: c,
    name: "C",
  },

  {
    id:2,
    logo:cpp,
    name:"C++"
  },

  {
    id: 3,
    logo: java,
    name: "Java",
  },

  {
    id: 4,
    logo: python,
    name: "Python",
  },

  {
    id: 5,
    logo: html,
    name: "HTML",
  },

  {
    id: 6,
    logo: css,
    name: "CSS",
  },

  {
    id: 7,
    logo: javaScript,
    name: "JavaScript",
  },

  {
    id: 8,
    logo: react,
    name: "React.JS",
  },
  {
    id: 9,
    logo: cop,
    name: "C #",
  },
  {
    id: 10,
    logo: django,
    name: "Django",
  },
  {
    id: 11,
    logo: vite,
    name: "Vite",
  },
  {
    id: 12,
    logo: tail,
    name: "Tailwind CSS",
  },
];

const socialLink = [
    { link: "https://github.com/FardeenAzim", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/fardeen-azim", icon: IconBrandLinkedin },
];


const Education = [
        {
          year: "2022 - 2025",
          title: "Computer Science",
          content: "Bachelor of Computer Application",
          description: "St. Paul's College Ranchi",
        },
        {
          year: "2020 - 2022",
          title: "Science",
          content: "Intermediate",
          description: "St. Aloysius Intermediate College Ranchi",
        },
        {
          year: "2020",
          title: "Matriculation",
          description: "St. Aloysius School Ranchi",
        
    },
  
]

export { Info, ProjectInfo, cardItems, socialLink, Education};



import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { FaMessage } from 'react-icons/fa6';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';

import p1 from '../assets/projectsImages/project1.png';
import p2 from '../assets/projectsImages/project2.png';
import p3 from '../assets/projectsImages/project3.png';
import p4 from '../assets/projectsImages/project4.png';
import p5 from '../assets/projectsImages/project5.png';
import p6 from '../assets/projectsImages/project6.png';
import p7 from '../assets/projectsImages/project7.png';
import p8 from '../assets/projectsImages/project8.png';
import p9 from '../assets/projectsImages/project9.png';
import p10 from '../assets/projectsImages/project10.png';
import p11 from '../assets/projectsImages/project11.png';

export const aboutData = [
  {
    id: 1,
    category: 'Me',
    desc: 'I am Mahmudul Amin Fahim from Sylhet, Bangladesh. I love video games, football, and programming. ',
  },
  {
    id: 2,
    category: 'Interest',
    desc: 'I want  to start my career as a front-end developer. ',
  },
  {
    id: 3,
    category: 'Specialty',
    desc: 'I can deep work.',
  },
];

export const skillData = [
  { id: 1, icon: <FaHtml5 /> },
  { id: 2, icon: <FaCss3 /> },
  { id: 3, icon: <IoLogoJavascript /> },
  { id: 4, icon: <FaReact /> },
  { id: 5, icon: <SiTypescript /> },
  { id: 6, icon: <FaSass /> },
];

export const projectsData = [
  {
    id: 1,
    category: 'CSS',
    icon: <FaCss3 />,
    desc: 'This is CSS restaurant website project. This website is make by HTML and CSS',
    img: p3,
    link: 'https://css-restaurant-project.netlify.app',
  },
  {
    id: 2,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React note app project. This website is make by React and CSS. You can toggle dark mood and light mood.',
    img: p1,
    link: 'https://my-react-note-app-1.netlify.app',
  },
  {
    id: 3,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React grocery bud project. This website is make by React and CSS',
    img: p2,
    link: 'https://my-react-grocery-bud-project.netlify.app',
  },
  {
    id: 4,
    category: 'CSS',
    icon: <FaCss3 />,
    desc: 'This is CSS E-commerce project. This website is make by HTML and CSS',
    img: p4,
    link: 'https://fahim-express.netlify.app',
  },
  {
    id: 5,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Country project. This website is make by React and CSS',
    img: p5,
    link: 'https://my-react-country-app.netlify.app',
  },
  {
    id: 6,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Unsplash Image project. This website is make by React and CSS',
    img: p6,
    link: 'https://my-react-unsplash-image-project.netlify.app',
  },
  {
    id: 7,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Menu project. This website is make by React and CSS',
    img: p7,
    link: 'https://my-react-menu-project.netlify.app',
  },
  {
    id: 8,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Navbar project. This website is make by React and CSS',
    img: p8,
    link: 'https://my-react-navbar-project.netlify.app',
  },
  {
    id: 9,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Cocktail project. This website is make by React and CSS',
    img: p9,
    link: 'https://my-react-cocktail-project.netlify.app',
  },
  {
    id: 10,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Cart project. This website is make by React and CSS',
    img: p10,
    link: 'https://my-react-cart-project1.netlify.app',
  },
  {
    id: 11,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Submenu project. This website is make by React and CSS',
    img: p11,
    link: 'https://my-react-submenu.netlify.app',
  },
];

export const contactData = [
  { name: 'Email', link: 'mahmudulaminfahim@gmail.com', icon: <FaMessage /> },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/+8801773531927',
    icon: <FaWhatsapp />,
  },
  {
    name: 'linkedIn',
    link: 'https://www.linkedin.com/in/mahmudul-amin-fahim-37a701288/',
    icon: <FaLinkedin />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/mahmudulamin.fahim.9',
    icon: <FaFacebook />,
  },
];

import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiRedux } from 'react-icons/si';
import { FaMessage } from 'react-icons/fa6';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

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
import p12 from '../assets/projectsImages/project12.png';
import p13 from '../assets/projectsImages/project13.png';
import p14 from '../assets/projectsImages/project14.png';
import p15 from '../assets/projectsImages/project15.png';
import p16 from '../assets/projectsImages/project16.png';
import p17 from '../assets/projectsImages/project17.png';

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
    technology: 'HTML, CSS',
  },
  {
    id: 2,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React note app project. This website is make by React and CSS. You can toggle dark mood and light mood.',
    img: p2,
    link: 'https://my-react-note-app-1.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 3,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React grocery bud project. This website is make by React and CSS',
    img: p3,
    link: 'https://my-react-grocery-bud-project.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 4,
    category: 'CSS',
    icon: <FaCss3 />,
    desc: 'This is CSS E-commerce project. This website is make by HTML and CSS',
    img: p4,
    link: 'https://fahim-express.netlify.app',
    technology: 'HTML.js, CSS',
  },
  {
    id: 5,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Country project. This website is make by React and CSS',
    img: p5,
    link: 'https://my-react-country-app.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 6,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Unsplash Image project. This website is make by React and CSS',
    img: p6,
    link: 'https://my-react-unsplash-image-project.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 7,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Menu project. This website is make by React and CSS',
    img: p7,
    link: 'https://my-react-menu-project.netlify.app',
    technology: 'React, CSS',
  },
  {
    id: 8,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Navbar project. This website is make by React and CSS',
    img: p8,
    link: 'https://my-react-navbar-project.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 9,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Cocktail project. This website is make by React and CSS',
    img: p9,
    link: 'https://my-react-cocktail-project.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 10,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Cart project. This website is make by React and CSS',
    img: p10,
    link: 'https://my-react-cart-project1.netlify.app',
    technology: 'React, CSS',
  },
  {
    id: 11,
    category: 'React',
    icon: <FaReact />,
    desc: 'This is React Submenu project. This website is make by React and CSS',
    img: p11,
    link: 'https://my-react-submenu.netlify.app',
    technology: 'React.js, CSS',
  },
  {
    id: 12,
    category: 'Redux',
    icon: <SiRedux />,
    desc: 'This is Redux-tookit books management project. This website is make by React redux and Redux toolkit',
    img: p12,
    link: 'https://redux-toolkit-books-mgt-app.netlify.app/',
    technology: 'React.js, Redux toolkit, CSS',
  },
  {
    id: 13,
    category: 'Next js',
    icon: <SiNextdotjs />,
    desc: 'This is Next js 14 anime vault app. Features: Browse Anime: Users can easily browse through a variety of anime series displayed on the homepage Load More: As users scroll down, more anime series are loaded dynamically, providing endless entertainment options. Detailed Information: Each anime card provides detailed information about the series, including its name, genre, number of episodes, and score. Eye-catching Design: The application features a visually appealing design with high-quality images and smooth animations. Responsive: Anime Vault is designed to work seamlessly across devices of all sizes, ensuring a consistent experience for users on desktops, tablets, and mobile devices.',
    img: p13,
    link: 'https://nextjs-anime-vault.netlify.app/',
    technology: 'Next js, React js, Tailwind CSS',
  },
  {
    id: 14,
    category: 'Next js',
    icon: <SiNextdotjs />,
    desc: `Displays current weather conditions for the user's location
    Supports searching for weather information in other locations
    Converts temperature from Kelvin to Celsius
    Converts wind speed from meters per second to kilometers per hour
    Determines whether it is day or night in the specified location`,
    img: p14,
    link: 'https://nextjs-weather-app-indol.vercel.app/',
    technology: 'Next js, React js, Tailwind CSS',
  },
  {
    id: 15,
    category: 'Next js',
    icon: <SiNextdotjs />,
    desc: `🚗 Car Catalogue: Explore a wide range of cars available in the catalogue.

  🔍 Search: Easily search for specific car models using the search bar.
  
  🎛️ Custom Filters: Filter cars by fuel type, year of production, and more using custom filter options.
  
  🔄 Pagination: Navigate through multiple pages of car listings with the pagination feature.`,
    img: p15,
    link: 'https://nextjs-car-showcase1.netlify.app',
    technology: 'Next js, React js, Tailwind CSS',
  },
  {
    id: 16,
    category: 'Next js',
    icon: <SiNextdotjs />,
    desc: `Browse products by category: Electronics, Jewelry, Men's Clothing, Women's Clothing. View product details including price, rating, and description.
    Add products to the cart.
    Increment, decrement, and remove items from the cart.Filter products by price range and customer ratings.
    Sort products by customer reviews, price low to high, and price high to low.`,
    img: p16,
    link: 'https://nextjs-shopping-cart-five.vercel.app/',
    technology: 'Next js, React js, Redux toolkit, Tailwind CSS',
  },
  {
    id: 17,
    category: 'Next js',
    icon: <SiNextdotjs />,
    desc: `Shadecn UI Dashboard is a responsive and modern dashboard interface designed for web applications. This project utilizes a variety of technologies to deliver a clean and user-friendly experience for managing data and insights.`,
    img: p17,
    link: 'shadecn-dashboard-mu.vercel.app/',
    technology: 'Next js, React js, Tailwind CSS',
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

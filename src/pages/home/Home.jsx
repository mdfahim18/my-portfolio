import React, { useEffect, useState } from 'react';
import profile from '../../assets/images/profile.jpg';
import './style.scss';
import { FaGithub } from 'react-icons/fa';
import AnimationLetters from '../../components/animation/AnimationLetters';
import { useGlobalContext } from '../../utils/useContext';
const Home = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [
    'M',
    'a',
    'h',
    'm',
    'u',
    'd',
    'u',
    'l',
    '',
    'A',
    'm',
    'i',
    'n',
    '',
    'F',
    'a',
    'h',
    'i',
    'm',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section onClick={() => setIsSidebarOpen(false)}>
      <article className='home'>
        <img className='profile' src={profile} alt='fahim' />
        <div className='home-info'>
          <p>Hi all,</p>
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={1}
            />
          </h1>
          <p>Front-end developer</p>
          <a href='https://github.com/mdfahim18' target='_black'>
            <FaGithub /> https://github.com/mdfahim18
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;

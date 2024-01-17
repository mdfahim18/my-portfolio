import React, { useEffect, useState } from 'react';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { navData } from '../../data/navData';
import { FaBars } from 'react-icons/fa6';
import { useGlobalContext } from '../../utils/context/useContext';
import Sidebar from './sidebar/Sidebar';
import AnimationLetters from '../animation/AnimationLetters';

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  const [value, setValue] = useState(0);
  const [letterClass, setLetterClass] = useState('text-animate');
  const navigate = useNavigate();

  const nameArray = ['f', 'a', 'h', 'i', 'm'];
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <header>
      <nav>
        <h1 onClick={() => navigate('/')}>fahim</h1>
        <ul className='lists'>
          {navData.map((item, index) => {
            const { page, link } = item;
            return (
              <li key={index} onClick={() => setValue(index)}>
                <Link
                  to={link}
                  className={`${
                    index === value ? 'active-list list-item' : 'list-item'
                  }`}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
        <FaBars
          className='bar-icon'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </nav>
      <Sidebar />
    </header>
  );
};

export default Navbar;

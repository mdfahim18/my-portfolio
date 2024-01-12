import React, { useState } from 'react';
import './style.scss';
import { useGlobalContext } from '../../../utils/context/useContext';
import { navData } from '../../../data/navData';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();

  const [value, setValue] = useState(0);
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <ul className='sidebar-lists'>
        {navData.map((item, index) => {
          const { page, link } = item;
          return (
            <li key={index} onClick={() => setValue(index)}>
              <Link
                className={`${
                  index === value ? 'active-list list-item' : 'list-item'
                }`}
                to={link}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

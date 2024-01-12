import React from 'react';
import './style.scss';
import { useGlobalContext } from '../../utils/context/useContext';
import { Link } from 'react-router-dom';
const Error = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <section onClick={() => setIsSidebarOpen(false)}>
      <div className='error'>
        <Link to='/' className='error-link'>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;

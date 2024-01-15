import React from 'react';
import './style.scss';
import { contactData } from '../../data/pageData';
import { useGlobalContext } from '../../utils/context/useContext';

const Contact = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className='contact-section'
      onClick={() => setIsSidebarOpen(false)}
    >
      <div className='section-center contact-center'>
        <div className='section-header'>
          <div className='btn-container'>
            {contactData.map((item, index) => {
              const { icon, name, link } = item;
              return (
                <a
                  href={link}
                  target='_blank'
                  className='contact-btn'
                  key={index}
                >
                  {icon}
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <div className='section-info contact'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div>
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' name='password' required />
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' required></textarea>
            </div>
            <button type='submit' className='submit-btn'>
              send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

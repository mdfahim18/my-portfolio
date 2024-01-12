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
              <label id='name' htmlFor='name'>
                Name:
              </label>
              <input type='text' name='name' required />
            </div>
            <div>
              <label id='email' htmlFor='email'>
                Email:
              </label>
              <input type='email' name='email' required />
            </div>
            <div>
              <label id='password' htmlFor='password'>
                Password:
              </label>
              <input type='password' name='password' required />
            </div>
            <div>
              <label id='message' htmlFor='message'>
                Message:
              </label>
              <textarea
                name='message'
                required
                // id=''
              ></textarea>
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

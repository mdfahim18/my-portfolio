import React from 'react';
import './style.scss';
import { contactData } from '../../data/pageData';
import { useGlobalContext } from '../../utils/useContext';
import EmailJs from '../../components/email/EmailJs';

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
          <EmailJs />
        </div>
      </div>
    </section>
  );
};

export default Contact;

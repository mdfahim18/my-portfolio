import React from 'react';
import Category from '../../components/Category';
import { useGlobalContext } from '../../utils/useContext';

const About = () => {
  const { fillterItems, about, categories, setIsSidebarOpen } =
    useGlobalContext();

  return (
    <section onClick={() => setIsSidebarOpen(false)}>
      <div className='section-center'>
        <div className='section-header'>
          <Category fillterItems={fillterItems} categories={categories} />
        </div>

        <div className='section-info'>
          {about.map((items) => {
            const { id, desc } = items;
            return <p key={id}>{desc}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

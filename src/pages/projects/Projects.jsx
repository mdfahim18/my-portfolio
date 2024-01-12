import React, { useState } from 'react';
import Category from '../../components/category/Category';
import { useGlobalContext } from '../../utils/context/useContext';
import './style.scss';

const Projects = () => {
  const { projectsCategory, projects, fillterProjects, setIsSidebarOpen } =
    useGlobalContext();
  const [readMore, setReadMore] = useState(false);

  return (
    <section onClick={() => setIsSidebarOpen(false)}>
      <div className='section-center projects-center'>
        <div className='section-header'>
          <Category
            fillterItems={fillterProjects}
            categories={projectsCategory}
          />
        </div>

        <div className='section-projects section-info'>
          {projects.map((items) => {
            const { id, desc, icon, img, category, link } = items;
            return (
              <article key={id}>
                <img src={img} alt={category} />
                <footer>
                  <i>{icon}</i>
                  <p>{readMore ? desc : `${desc.substring(0, 20)}...`}</p>
                  <a href={link} target='_black'>
                    {link}
                  </a>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

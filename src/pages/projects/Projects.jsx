import React, { useState } from 'react';
import Category from '../../components/category/Category';
import { useGlobalContext } from '../../utils/context/useContext';
import './style.scss';
import { Link } from 'react-router-dom';

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
            const { id, desc, icon, img, category, link, technology } = items;
            return (
              <article key={id}>
                <img src={img} alt={category} />
                <footer>
                  <i>{icon}</i>
                  <Link
                    className='details-link'
                    to={`/single-project/${id}`}
                    state={{ img, desc, technology, link, category }}
                  >
                    details
                  </Link>
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

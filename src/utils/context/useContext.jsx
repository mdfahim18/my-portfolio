import { useContext, useState, createContext } from 'react';
import { aboutData, projectsData } from '../../data/pageData';
const AppContext = createContext();

const allfillteredItems = [
  'all',
  ...new Set(aboutData.map((item) => item.category)),
];

const allfillteredProjects = [
  'all',
  ...new Set(projectsData.map((item) => item.category)),
];

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState(allfillteredItems);
  const [about, setAbout] = useState(aboutData);
  const [projectsCategory, setProjectsCategory] =
    useState(allfillteredProjects);
  const [projects, setProjects] = useState(projectsData);

  const fillterItems = (category) => {
    if (category === 'all') {
      setAbout(aboutData);
      return;
    }

    const newItems = aboutData.filter((item) => item.category === category);
    setAbout(newItems);
  };

  const fillterProjects = (category) => {
    if (category === 'all') {
      setProjects(projectsData);
      return;
    }

    const newItems = projectsData.filter((item) => item.category === category);
    setProjects(newItems);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        fillterItems,
        about,
        categories,
        projects,
        projectsCategory,
        fillterProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

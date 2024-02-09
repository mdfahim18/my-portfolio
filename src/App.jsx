import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.scss';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Error from './pages/error/Error';
import { BallTriangle } from 'react-loader-spinner';
import SingleProject from './pages/projects/singleProject/SingleProject';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className='main'>
      {isLoading ? (
        <div className='loader'>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color='#09090b'
            ariaLabel='ball-triangle-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/single-project/:id' element={<SingleProject />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;

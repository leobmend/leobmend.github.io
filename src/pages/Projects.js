import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuNav from '../components/MenuNav';
import ProjectCard from '../components/ProjectCard';
import trybeTunesVideo from '../midia/Trybe Tunes.mp4';
import trybewartsFormVideo  from '../midia/Trybewarts Form.mp4';

function Projects() {
  const [hrStyle, setHrStyle] = useState('w-1');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-20');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-20 ');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');
  
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-11/12');
      setMenuContainerStyle('');
    }, 400);
    setTimeout(() => {
      setUpContainerStyle('');
    }, 400);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 400);
  }, []);

  const handleClick = (path) => {
    setHrStyle('w-1');
    setUpContainerStyle('opacity-0 translate-y-20');
    setDownContainerStyle('opacity-0 -translate-y-20')
    setTimeout(() => {
      navigate(`/${path}`)
    }, 750)
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      <MenuNav
        handleClick={ handleClick } menuContainerStyles={ menuContainerStyle } actualPage="Projects"
      />
      <section
        className={`ease-in-out duration-700 h-1/2 w-screen px-4 flex items-center snap-x snap-mandatory overflow-x-scroll ${upContainerStyle}`}
      >
        <ProjectCard title="Trybe Tunes" videoSrc={ trybeTunesVideo } />
        <ProjectCard title="Trybe Tunes" videoSrc={ trybewartsFormVideo } />
        <ProjectCard title="Trybe Tunes" videoSrc={ trybewartsFormVideo } />
        <ProjectCard title="Trybe Tunes" videoSrc={ trybewartsFormVideo } />
      </section>
      <hr
        className={`ease-in-out duration-500 h-1 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <div 
        className={`ease-in-out duration-700 h-1/2 w-screen px-8 flex items-center ${downContainerStyle}`}
      >
        <article>
          
        </article>
      </div>
    </main>
  );
}

export default Projects;

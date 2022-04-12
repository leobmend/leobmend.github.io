import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuNav from '../components/MenuNav';
import ProjectCard from '../components/ProjectCard';
import trybeTunesVideo from '../midia/Trybe Tunes.mp4';
import trybewartsFormVideo  from '../midia/Trybewarts Form.mp4';

function Projects() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-20');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-20 ');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');
  
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-11/12 h-2');
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
    setHrStyle('w-1 h-2');
    setUpContainerStyle('opacity-0 translate-y-20');
    setDownContainerStyle('opacity-0 -translate-y-20')
    setTimeout(() => {
      navigate(`/${path}`)
    }, 750)
  };

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <MenuNav
        handleClick={ handleClick } menuContainerStyles={ menuContainerStyle } actualPage="Projects"
      />
      <div
        className={`ease-in-out duration-700 h-full w-full flex items-center justify-evenly ${upContainerStyle}`}
      >
        <ProjectCard title="Trybe Tunes" videoSrc={ trybeTunesVideo } />
        <ProjectCard title="Trybe Tunes" videoSrc={ trybewartsFormVideo } />
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <div className={`ease-in-out duration-700 h-full w-full flex items-center justify-evenly ${downContainerStyle}`}>
        <ProjectCard title="Trybe Tunes" videoSrc={ trybeTunesVideo } />
        <ProjectCard title="Trybe Tunes" videoSrc={ trybeTunesVideo } />
      </div>
    </main>
  );
}

export default Projects;

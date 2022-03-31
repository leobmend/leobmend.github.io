import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import trybeTunesVideo from '../midia/Trybe Tunes.mp4';

function Projects() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-20');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-20 ')
  
  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-2');
    }, 400);
    setTimeout(() => {
      setUpContainerStyle('');
    }, 400);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 400);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <div
        className={`ease-in-out duration-700 h-full w-full flex items-center justify-evenly ${upContainerStyle}`}
      >
        <ProjectCard title="Trybe Tunes" videoSrc={ trybeTunesVideo } />
        <ProjectCard title="Trybe Tunes" videoSrc={ trybeTunesVideo } />
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

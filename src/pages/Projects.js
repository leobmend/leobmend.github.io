import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuNav from '../components/MenuNav';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../components/ProjectDescription';
import trybeTunesVideo from '../midia/Trybe Tunes.mp4';
import trybewartsFormVideo from '../midia/Trybewarts Form.mp4';
import tiviaGameVideo from '../midia/Trivia Game.mp4';

function Projects() {
  const [hrStyle, setHrStyle] = useState('w-1');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-20');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-20 ');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');
  const [projectSelected, setProjectSelected] = useState('');

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

  const handleClickNav = (path) => {
    setHrStyle('w-1');
    setUpContainerStyle('opacity-0 translate-y-20');
    setDownContainerStyle('opacity-0 -translate-y-20');
    setTimeout(() => {
      navigate(`/${path}`);
    }, 750);
  };

  const handleScroll = (event) => {
    const { deltaY, target } = event;
    target.scrollLeft += deltaY;
  };

  const handleClick = (title) => {
    setProjectSelected(title);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      <MenuNav
        handleClick={ handleClickNav }
        menuContainerStyles={ menuContainerStyle }
        actualPage="Projects"
      />
      <section
        className={
          'ease-in-out duration-700 h-1/2 w-screen px-4 flex items-center snap-x snap-mandatory '
          + `2xl:snap-none 2xl:scrollbar2xl overflow-auto overflow-x-scroll ${upContainerStyle}`
        }
        onWheel={ handleScroll }
      >
        <ProjectCard
          title="Trivia Game"
          videoSrc={ tiviaGameVideo }
          handleClick={ handleClick }
          projectSelected={ projectSelected }
        />
        <ProjectCard
          title="Trybe Tunes"
          videoSrc={ trybeTunesVideo }
          handleClick={ handleClick }
          projectSelected={ projectSelected }
        />
        <ProjectCard
          title="Trybewarts Form"
          videoSrc={ trybewartsFormVideo }
          handleClick={ handleClick }
          projectSelected={ projectSelected }
        />
      </section>
      <hr
        className={ 'ease-in-out duration-500 h-1 rounded-sm border-none bg-slate-100 '
          + `z-10 ${hrStyle}` }
      />
      <div
        className={ 'ease-in-out duration-700 h-1/2 w-screen px-4 flex justify-center '
          + `items-center ${downContainerStyle}` }
      >
        <ProjectDescription project={ projectSelected } />
      </div>
    </main>
  );
}

export default Projects;

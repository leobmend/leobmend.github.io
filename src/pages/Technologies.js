import React, { useEffect, useState } from 'react';
import TechLogo from '../components/TechLogo';
import MenuNav from '../components/MenuNav';
import TechDescription from '../components/TechDescription';

import jsLogo from '../midia/js.svg';
import cssLogo from '../midia/css.svg';
import htmlLogo from '../midia/html.svg';
import reactLogo from '../midia/react.svg';
import reduxLogo from '../midia/redux.svg';
import tailwindLogo from '../midia/tailwind.svg';
import jestLogo from '../midia/jest.svg';
import dockerLogo from '../midia/docker.svg';
import nodeLogo from '../midia/node.svg';

import { useNavigate } from 'react-router-dom';

function Technologies() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-16');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-40');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');
  const [techSelected, setTechSelected] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-1');
      setMenuContainerStyle('');
      setDownContainerStyle('opacity-0');
    }, 400);
    setTimeout(() => {
      setUpContainerStyle('h-1/4');
      setDownContainerStyle('h-3/4');
    }, 1200);
  }, []);

  const handleClickNav = (path) => {
    setUpContainerStyle('opacity-0 h-1/4');
    setDownContainerStyle('opacity-0')
    setTimeout(() => {
      setHrStyle('w-1 h-2');
      setUpContainerStyle('opacity-0 translate-y-20');
      setDownContainerStyle('opacity-0 -translate-y-20');
    }, 400);
    setTimeout(() => {
      navigate(`/${path}`)
    }, 800);
  };

  const handleClickTech = (tech) => {
    setTechSelected(tech);
  }

  return (
    <main className="flex flex-col justify-center items-center overflow-hidden h-full">
      <MenuNav
        handleClick={ handleClickNav } menuContainerStyles={ menuContainerStyle } actualPage="Technologies"
      />
      <div
        className={ `ease-in-out duration-700 h-full w-full flex items-center justify-center ${upContainerStyle}`}
      >
        <div className="flex items-center overflow-x-scroll h-5/6 snap-x snap-mandatory 2xl:scrollbar2xl">
          <TechLogo 
            logo={ jsLogo } selected={ techSelected === 'js' }
            handleClick={ () => handleClickTech('js') } styles='w-5/6'
          />
          <TechLogo
            logo={ cssLogo } selected={ techSelected === 'css' }
            handleClick={ () => handleClickTech('css') }
          />
          <TechLogo 
            logo={ htmlLogo } selected={ techSelected === 'html' }
            handleClick={ () => handleClickTech('html') }
          />
          <TechLogo
            logo={ nodeLogo } selected={ techSelected === 'node' }
            handleClick={ () => handleClickTech('node') } styles='w-5/6'
          />
          <TechLogo
            logo={ jestLogo } selected={ techSelected === 'jest' }
            handleClick={ () => handleClickTech('jest') } styles='w-5/6'
          />
          <TechLogo 
            logo={ dockerLogo } selected={ techSelected === 'docker' }
            handleClick={ () => handleClickTech('docker') }
          />
          <TechLogo
            logo={ reactLogo } selected={ techSelected === 'react' }
            handleClick={ () => handleClickTech('react') }
          />
          <TechLogo
            logo={ reduxLogo } selected={ techSelected === 'redux' }
            handleClick={ () => handleClickTech('redux') }
          />
          <TechLogo
            logo={ tailwindLogo } selected={ techSelected === 'tailwind' }
            handleClick={ () => handleClickTech('tailwind') }
          />
        </div>
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <div className={`ease-in-out duration-500 h-full w-full flex items-center justify-center ${downContainerStyle}`}>
        <TechDescription tech={ techSelected } />
      </div>
    </main>
  );
}

export default Technologies;

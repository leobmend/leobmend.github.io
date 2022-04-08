import React, { useEffect, useState } from 'react';
import TechLogo from '../components/TechLogo';
import jsLogo from '../midia/js.svg';
import cssLogo from '../midia/css.svg';
import htmlLogo from '../midia/html.svg';
import reactLogo from '../midia/react.svg';
import reduxLogo from '../midia/redux.svg';
import tailwindLogo from '../midia/tailwind.svg';
import MenuNav from '../components/MenuNav';
import { useNavigate } from 'react-router-dom';
import TechDescription from '../components/TechDescription';

function Technologies() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-16');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-40');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');
  const [techSelected, setTechSelected] = useState('');

  const navigate = useNavigate();

  const MENU_LINKS_STYLE = "ease-in duration-200 mx-20 rounded-xl p-1 mt-1 font-semibold hover:bg-slate-100 hover:text-black";

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-1');
      setMenuContainerStyle('');
      setDownContainerStyle('opacity-0');
    }, 400);
    setTimeout(() => {
      setUpContainerStyle('h-1/4');
    }, 1200);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 1600);
  }, []);

  const handleClickNav = (path) => {
    setHrStyle('w-1 h-2');
    setUpContainerStyle('opacity-0 translate-y-20');
    setDownContainerStyle('opacity-0 -translate-y-20')
    setTimeout(() => {
      navigate(`/${path}`)
    }, 750)
  };

  const handleClickTech = (tech) => {
    setTechSelected(tech);
  }

  return (
    <main className="flex flex-col justify-center items-center overflow-hidden h-full">
      <MenuNav
        buttonsStyles={ MENU_LINKS_STYLE } handleClick={ handleClickNav }
        menuContainerStyles={ menuContainerStyle } actualPage="Technologies"
      />
      <div
        className={`ease-in-out duration-700 h-full w-full flex items-end justify-center ${upContainerStyle}`}
      >
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

import React, { useEffect, useState } from 'react';
import TechLogo from '../components/TechLogo';
import jsLogo from '../midia/js.svg';
import cssLogo from '../midia/css.svg';
import htmlLogo from '../midia/html.svg';
import MenuNav from '../components/MenuNav';
import { useNavigate } from 'react-router-dom';

function Technologies() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-52');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-52 ');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');

  const navigate = useNavigate();

  const MENU_LINKS_STYLE = "ease-in duration-200 mx-20 rounded-xl p-1 mt-1 font-semibold hover:bg-slate-100 hover:text-black";

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-1');
      setMenuContainerStyle('');
    }, 400);
    setTimeout(() => {
      setUpContainerStyle('h-2/5');
    }, 640);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 640);
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
        buttonsStyles={ MENU_LINKS_STYLE } handleClick={ handleClick }
        menuContainerStyles={ menuContainerStyle } actualPage="Technologies"
      />
      <div
        className={`ease-in-out duration-700 h-full w-full flex items-end justify-center ${upContainerStyle}`}
      >
        <TechLogo logo={ jsLogo } styles="w-5/6" />
        <TechLogo logo={ cssLogo } />
        <TechLogo logo={ htmlLogo } />
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <div className={`ease-in-out duration-700 h-full w-full flex items-center justify-center ${downContainerStyle}`}>
        Down
      </div>
    </main>
  );
}

export default Technologies;

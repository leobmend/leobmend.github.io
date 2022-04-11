import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../midia/profile.png';

function Home() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-52');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-52 ');

  const navigate = useNavigate();

  const MENU_LINKS_STYLE = "ease-in duration-200 mx-20 rounded-xl p-2 font-semibold hover:bg-slate-100 hover:text-black";
  
  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-2');
      setUpContainerStyle('opacity-0');
    }, 800);
    setTimeout(() => {
      setUpContainerStyle('');
    }, 800);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 800);
  }, []);

  const handleClick = (path) => {
    setHrStyle('w-1 h-2');
    setUpContainerStyle('opacity-0 translate-y-20');
    setDownContainerStyle('opacity-0 -translate-y-20')
    setTimeout(() => {
      navigate(`/${path}`)
    }, 750)
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      <div
        className={`ease-in-out duration-700 h-screen w-screen flex items-center justify-center ${upContainerStyle}
          flex`}
      >
        <div className="flex flex-col mx-4 md:mx-8 2xl:mx-20">
          <h1 className="text-center font-bold text-white text-3xl md:text-5xl 2xl:text-7xl">LEONARDO</h1>
          <h1 className="text-center text-white text-[1.1rem] md:text-[1.7rem] 2xl:text-[2.5rem]">BARROS MENDONÇA</h1>
        </div>
        <img
          className="ease-in-out duration-700 rounded-full w-1/4 mx-4 md:mx-8 2xl:mx-20 2xl:w-72"
          src={profilePic} alt="Leonardo"
        />
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <nav className={`ease-in-out duration-700 flex flex-col justify-center items-center text-white h-full z-10 
        text-xl ${downContainerStyle} 2xl:text-4xl 2xl:flex-row`}>
        <button type="button" onClick={ () => handleClick('projects') }>
          <h2 className={ MENU_LINKS_STYLE }>Projects</h2>
        </button>
        <button type="button" onClick={ () => handleClick('about') }>
          <h2 className={ MENU_LINKS_STYLE }>About</h2>
        </button>
        <button type="button" onClick={ () => handleClick('technologies') }>
          <h2 className={ MENU_LINKS_STYLE }>Technologies</h2>
        </button>
      </nav>
    </main>
  );
}

export default Home;

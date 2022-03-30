import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../images/profile.png';

function Home() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-52');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-52 ')

  const MENU_LINKS_STYLE = "ease-in duration-200 mx-20 rounded-xl p-2 hover:bg-slate-100 hover:text-black";
  
  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-2');
      setUpContainerStyle('opacity-0');
    }, 800);
    setTimeout(() => {
      setUpContainerStyle('');
    }, 1040);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 1040);
  }, [])

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <div
        className={`ease-in-out duration-700 h-full w-full flex items-center justify-center ${upContainerStyle}`}
      >
        <div className="mx-20 flex flex-col">
          <h1 className="text-center font-bold text-7xl text-white">LEONARDO</h1>
          <h1 className="text-center text-[2.5rem] text-white">BARROS MENDONÇA</h1>
        </div>
        <img
          className="ease-in-out duration-700 mx-20 rounded-full w-72"
          src={profilePic} alt="Leonardo"
        />
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <nav className={`ease-in-out duration-700 flex items-center text-white font-semibold text-4xl h-full z-10 ${downContainerStyle}`}>
        <Link to="/projects">
          <h2 className={ MENU_LINKS_STYLE }>Projects</h2>
        </Link>
        <Link to="/about">
          <h2 className={ MENU_LINKS_STYLE }>About</h2>
        </Link>
        <Link to="technologies">
          <h2 className={ MENU_LINKS_STYLE }>Technologies</h2>
        </Link>
      </nav>
    </main>

  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import profilePic from '../images/profile.png';

function Home() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2')
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-60')

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-2');
      setUpContainerStyle('opacity-0');
    }, 800)
    setTimeout(() => {
      setUpContainerStyle('');
    }, 920)
  }, [])

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <div
        className="h-full w-full flex items-center justify-center"
      >
        <div className={`ease-in-out duration-500 mx-10 flex flex-col ${upContainerStyle}`}>
          <h1 className="text-center font-bold text-6xl text-white">LEONARDO</h1>
          <h1 className="text-center text-[2.15rem] text-white">BARROS MENDONÇA</h1>
        </div>
        <img
          className={`ease-in-out duration-500 mx-10 rounded-full w-72 ${upContainerStyle}`}
          src={profilePic} alt="Leonardo"
        />
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <nav className="h-full z-10 bg-red-100">
        
      </nav>
    </main>

  );
}

export default Home;

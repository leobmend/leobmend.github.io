import React, { useEffect, useState } from 'react';
import profilePic from '../midia/profile.png';
import linkedinSvg from '../midia/linkedin.svg';
import gmailSvg from '../midia/gmail.svg';

function About() {
  const [hrStyle, setHrStyle] = useState('w-2 h-1');
  const [leftContainerStyle, setLeftContainerStyle] = useState('w-full opacity-0 translate-y-52');
  const [rightContainerStyle, setRightContainerStyle] = useState('opacity-0 -translate-y-52 ')
  
  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-1 h-5/6');
    }, 400);
    setTimeout(() => {
      setLeftContainerStyle('w-1/5');
    }, 1000);
    setTimeout(() => {
      setRightContainerStyle('');
    }, 1000);
  }, [])

  return (
    <main className="flex justify-center items-center h-full">
      <div
        className={`ease-in-out duration-500 h-full flex flex-col items-center justify-center ${leftContainerStyle}`}
      >
        <img
          className="ease-in-out duration-500 mx-20 rounded-full w-40"
          src={profilePic} alt="Leonardo"
        />
        <img
          className="w-1/5 aspect-square"
          src={ linkedinSvg }
          alt="Linkedin"
        />
        <img
          className="w-1/5 aspect-square"
          src={ gmailSvg }
          alt="G-mail"
        />
      </div>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <div className={`ease-in-out duration-700 h-full w-full flex items-center justify-center ${rightContainerStyle}`}>
        Right
      </div>
    </main>
  );
}

export default About;

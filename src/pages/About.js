import React, { useEffect, useState } from 'react';
import profilePic from '../midia/profile.png';
import linkedinSvg from '../midia/linkedin.svg';
import gmailSvg from '../midia/gmail.svg';
import githubSvg from '../midia/github.svg';


function About() {
  const [hrStyle, setHrStyle] = useState('w-2 h-1');
  const [leftContainerStyle, setLeftContainerStyle] = useState('w-full opacity-0');
  const [rightContainerStyle, setRightContainerStyle] = useState('w-full opacity-0')
  
  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-1 h-5/6');
    }, 400);
    setTimeout(() => {
      setLeftContainerStyle('w-1/5 opacity-0');
    }, 1000);
    setTimeout(() => {
      setLeftContainerStyle('w-1/5');
    }, 1500);
    setTimeout(() => {
      setRightContainerStyle('');
    }, 1000);
  }, [])

  return (
    <main className="flex justify-center items-center h-full">
      <section
        className={`ease-in-out duration-500 h-full py-20 flex flex-col items-center justify-around ${leftContainerStyle}`}
      >
        <img
          className="ease-in-out duration-500 mx-20 rounded-full w-44 shadow-sm shadow-gray-50"
          src={profilePic} alt="Leonardo"
        />
        <section className='flex flex-col items-center w-full'>
          <div className="flex justify-center w-1/3 aspect-square border-3 my-3 rounded-full border-white">
            <img
              className="w-1/2"
              src={ linkedinSvg }
              alt="Linkedin"
            />
          </div>
          <div className="flex justify-center w-1/3 aspect-square border-3 my-3 rounded-full border-white">
            <img
              className="w-2/3"
              src={ gmailSvg }
              alt="G-mail"
            />
          </div>
          <div className="flex justify-center w-1/3 aspect-square border-3 my-3 rounded-full border-white">
            <img
              className="w-2/3"
              src={ githubSvg }
              alt="Github"
            />
          </div>
        </section>
      </section>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 z-10 ${hrStyle}`}
      />
      <article className={`ease-in-out duration-700 h-full w-full flex flex-col px-32 text-white items-center justify-center ${rightContainerStyle}`}>
        <div className="my-20 self-start">
          <h1 className="font-bold text-6xl text-white">LEONARDO</h1>
          <h1 className="text-3xl text-white">BARROS MENDONÇA</h1>
        </div>
        <p className="text-lg">
          Entusiasta de tecnologia - ou, sendo mais claro, nerd de video-games e computadores - desde a infância, acabei por optar por uma graduação não tão ligada à área. Porém, certas coisas na nossa vida nos escolhem, ao invés de as escolhermos. E agora persigo o sonho de trilhar uma carreira com desenvolvimento de software.  Portanto, busco cada dia saber um pouco mais sobre programação e a sua capacidade de mudar o mundo.
        </p>
        <p>
          Atualmente, participo da
          {' '}
          <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QxDZSwtMJZ4">Turma XP</a>
          {' '}
          da
          {' '}
          <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.betrybe.com/">Trybe</a>
          {' '}
          em parceria com a
          {' '}
          <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.xpinc.com/">XP Inc.</a> 
        </p>
      </article>
    </main>
  );
}

export default About;

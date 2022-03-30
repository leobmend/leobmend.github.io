import React, { useEffect, useState } from 'react';

function Projects() {
  const [hrStyle, setHrStyle] = useState('w-1 h-2');
  const [upContainerStyle, setUpContainerStyle] = useState('opacity-0 translate-y-52');
  const [downContainerStyle, setDownContainerStyle] = useState('opacity-0 -translate-y-52 ')
  
  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-5/6 h-2');
    }, 400);
    setTimeout(() => {
      setUpContainerStyle('');
    }, 640);
    setTimeout(() => {
      setDownContainerStyle('');
    }, 640);
  }, [])

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <div
        className={`ease-in-out duration-700 h-full w-full flex items-center justify-center ${upContainerStyle}`}
      >
        Up
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

export default Projects;

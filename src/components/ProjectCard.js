import React from 'react';

function ProjectCard({ videoSrc, thumbnailSrc, title }) {
  const handleHoverIn = ({ target }) => {    
    // Code obtained from the following stackoverflow thread:
    // https://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use
    const promise = target.play();
    if (promise !== undefined) {
      promise.then(() => {
        target.muted();
        // Autoplay started
      }).catch(error => {
        // Autoplay was prevented.
        target.muted = true;
        target.play();
      });
    }
  }

  const handleHoverOut = ({ target }) => {
    target.pause();
    target.currentTime = 0;
  }

  return (
    <div
      className="flex flex-col xl:flex-row shrink-0 snap-center items-center w-3/4 md:w-3/6 lg:w-2/6 xl:w-1/2 2xl:w-[40%] h-[60%] md:h-4/6 
      mx-4 bg-slate-100 rounded-lg shadow-md shadow-black"
    >
      <video className="rounded-t-lg 2xl:rounded-lg bg-black w-full xl:w-auto xl:h-full"
        src={ videoSrc } onMouseEnter={ handleHoverIn } onMouseLeave={ handleHoverOut } preload="auto"
      />
      <h1 className="font-bold m-auto text-2xl text-center">{title}</h1>
  </div>
  );
}

export default ProjectCard;

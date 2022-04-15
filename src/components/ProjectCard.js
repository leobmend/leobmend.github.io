import React from 'react';

function ProjectCard({ videoSrc, thumbnailSrc, title, handleClick }) {
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
  };

  const handleHoverOut = ({ target }) => {
    target.pause();
    target.currentTime = 0;
  };

  return (
    <div
      className="flex flex-col xl:flex-row shrink-0 snap-center items-center w-3/4 md:w-3/6 lg:w-2/6 xl:w-1/2 2xl:w-[40%] h-[60%] md:h-4/6 
      mx-4 2xl:mx-10 bg-slate-100 rounded-lg shadow-md shadow-black"
      onClick={ () => handleClick(title) }
    >
      <video className="rounded-t-lg 2xl:rounded-lg bg-black w-full xl:w-auto xl:h-full"
        src={ videoSrc } onMouseEnter={ handleHoverIn } onMouseLeave={ handleHoverOut } preload="auto"
      />
      <h1 className="ease-in-out duration-300 font-bold p-2 m-auto text-2xl text-center border-2 border-slate-100 rounded-lg 
      hover:bg-slate-800 hover:text-white">
        {title}
      </h1>
  </div>
  );
};

export default ProjectCard;

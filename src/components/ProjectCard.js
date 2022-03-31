import React from 'react';

function ProjectCard({ videoSrc, thumbnailSrc, title }) {
  const handleHoverIn = ({ target }) => {    
    // Code obtained from the following stackoverflow thread:
    // rehttps://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use
    const promise = target.play();
    if (promise !== undefined) {
      promise.then(() => {
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
    <div className="flex flex-col items-center w-1/5 h-4/6 bg-slate-100 rounded-lg shadow-md shadow-black">
      <video className="rounded-t-lg w-full" src={ videoSrc } onMouseEnter={ handleHoverIn } onMouseLeave={ handleHoverOut } preload="auto"></video>
      <h1 className="font-bold m-auto text-2xl">{title}</h1>
    </div>
  );
}

export default ProjectCard;

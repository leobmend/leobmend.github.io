import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({
  videoSrc, title, handleClick, projectSelected,
}) {
  const isSelected = title === projectSelected;

  const handleHoverIn = ({ target }) => {
    target.play();
  };

  const handleHoverOut = ({ target }) => {
    target.pause();
    target.load();
  };

  return (
    <div
      className={ 'flex flex-col xl:flex-row shrink-0 snap-center items-center justify-center '
        + 'w-3/4 md:w-4/6 lg:w-2/6 xl:w-1/2 2xl:w-[40%] h-[60%] md:h-4/6 mx-10 2xl:mx-1 rounded-lg '
        + 'translate-y-6' }
      onClick={ () => handleClick(title) }
      onKeyDown={ () => {} }
      role="button"
      tabIndex={ 0 }
    >
      <video
        className="rounded-lg bg-black w-full xl:w-auto xl:h-full"
        src={ videoSrc }
        onMouseEnter={ handleHoverIn }
        onMouseLeave={ handleHoverOut }
        preload="auto"
        muted="muted"
      />
      <h1 className={
        'ease-in-out duration-300 font-bold py-1 px-2 m-2 text-xl text-center rounded-lg '
        + `hover:bg-white text-white hover:text-black ${isSelected && 'text-black bg-white'}`
      }
      >
        {title}
      </h1>
    </div>
  );
}

ProjectCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  projectSelected: PropTypes.string.isRequired,
};

export default ProjectCard;

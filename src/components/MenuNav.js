import React from 'react';

function MenuNav({ menuContainerStyles, buttonsStyles, handleClick }) {
  return (
    <nav className={`ease-in-out duration-700 flex absolute top-0 items-center text-white text-xl ${menuContainerStyles}`}>
        <button type="button" onClick={ () => handleClick('') }>
          <h2 className={ buttonsStyles }>Home</h2>
        </button>
        <button type="button" onClick={ () => handleClick('projects') }>
          <h2 className={ buttonsStyles }>Projects</h2>
        </button>
        <button type="button" onClick={ () => handleClick('technologies') }>
          <h2 className={ buttonsStyles }>Technologies</h2>
        </button>
      </nav>
  );
}

export default MenuNav;

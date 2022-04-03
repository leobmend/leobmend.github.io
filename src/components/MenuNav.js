import React from 'react';

function MenuNav({ menuContainerStyles, buttonsStyles, handleClick, actualPage }) {
  const listOfPages = ['About', 'Projects', 'Technologies'].filter((page) => page !== actualPage);

  return (
    <nav className={`ease-in-out duration-700 flex absolute top-0 items-center text-white text-xl ${menuContainerStyles}`}>
        <button type="button" onClick={ () => handleClick('') }>
          <h2 className={ buttonsStyles }>Home</h2>
        </button>
        <button type="button" onClick={ () => handleClick(listOfPages[0].toLowerCase()) }>
          <h2 className={ buttonsStyles }>{listOfPages[0]}</h2>
        </button>
        <button type="button" onClick={ () => handleClick(listOfPages[1].toLowerCase()) }>
          <h2 className={ buttonsStyles }>{listOfPages[1]}</h2>
        </button>
      </nav>
  );
}

export default MenuNav;

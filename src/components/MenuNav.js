import React from 'react';

function MenuNav({ menuContainerStyles, handleClick, actualPage }) {
  const listOfPages = ['About', 'Projects', 'Technologies'].filter((page) => page !== actualPage);
  const BUTTON_STYLE = "ease-in duration-200 mx-20 rounded-xl p-1 mt-1 font-semibold hover:bg-slate-100 hover:text-black";

  return (
    <nav className={`ease-in-out duration-700 flex absolute top-0 items-center text-white text-xl ${menuContainerStyles}`}>
        <button type="button" onClick={ () => handleClick('') }>
          <h2 className={ BUTTON_STYLE }>Home</h2>
        </button>
        <button type="button" onClick={ () => handleClick(listOfPages[0].toLowerCase()) }>
          <h2 className={ BUTTON_STYLE }>{listOfPages[0]}</h2>
        </button>
        <button type="button" onClick={ () => handleClick(listOfPages[1].toLowerCase()) }>
          <h2 className={ BUTTON_STYLE }>{listOfPages[1]}</h2>
        </button>
      </nav>
  );
}

export default MenuNav;

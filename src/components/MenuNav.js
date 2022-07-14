import React from 'react';
import PropTypes from 'prop-types';

function MenuNav({ menuContainerStyles, handleClick, actualPage }) {
  const listOfPages = ['About', 'Projects', 'Technologies'].filter((page) => page !== actualPage);
  const BUTTON_STYLE = 'ease-in duration-200 rounded-xl p-1 my-1 font-semibold hover:bg-slate-100 '
   + 'hover:text-black';

  return (
    <nav
      className={ 'ease-in-out duration-700 flex flex-col w-full absolute top-0 items-center '
        + `text-white text-lg md:text-xl ${menuContainerStyles}` }
    >
      <div
        className="flex justify-center w-full"
      >
        <button
          type="button"
          className="mx-auto md:mx-10 2xl:mx-20"
          onClick={ () => handleClick('') }
        >
          <h2 className={ BUTTON_STYLE }>Home</h2>
        </button>
        <button
          type="button"
          className="mx-auto md:mx-10 2xl:mx-20"
          onClick={ () => handleClick(listOfPages[0].toLowerCase()) }
        >
          <h2 className={ BUTTON_STYLE }>{listOfPages[0]}</h2>
        </button>
        <button
          type="button"
          className="mx-auto md:mx-10 2xl:mx-20"
          onClick={ () => handleClick(listOfPages[1].toLowerCase()) }
        >
          <h2 className={ BUTTON_STYLE }>{listOfPages[1]}</h2>
        </button>
      </div>
      <hr
        className="w-screen lg:hidden"
      />
    </nav>
  );
}

MenuNav.propTypes = {
  menuContainerStyles: PropTypes.string.isRequired,
  actualPage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenuNav;

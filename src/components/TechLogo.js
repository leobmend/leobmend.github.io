import React from 'react';
import PropTypes from 'prop-types';

function TechLogo({ logo, handleClick, selected, styles = 'w-full' }) {
  return (
    <div 
      className={ `ease-in-out duration-300 p-1 h-1/2 flex mx-6 items-center justify-center`
       + ` aspect-square hover:bg-slate-100 rounded-xl snap-center translate-y-4`
       + ` ${selected && 'bg-slate-100'}` }
      onClick={ handleClick }  
    >
      <img src={ logo } alt="logo" className={ `aspect-square ${styles}` } />
    </div>
  );
}

TechLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  styles: PropTypes.string,
}

export default TechLogo;

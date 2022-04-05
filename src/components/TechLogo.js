import React from 'react';
import PropTypes from 'prop-types';

function TechLogo({ logo, handleClick, selected, styles = 'w-full' }) {
  return (
    <div 
      className={ `ease-in duration-300 p-2 flex mx-10 mb-5 justify-center items-center
        h-1/2 aspect-square hover:bg-white rounded-xl ${selected && 'bg-white'}` }
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

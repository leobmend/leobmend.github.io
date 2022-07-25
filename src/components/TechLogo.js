import React from 'react';
import PropTypes from 'prop-types';

function TechLogo({
  logo, handleClick, selected, styles = 'w-full',
}) {
  return (
    <div
      className={ 'ease-in-out duration-300 p-1 h-1/2 flex mx-6 items-center justify-center'
       + ' aspect-square hover:bg-slate-100 rounded-xl snap-center translate-y-4'
       + ` ${selected && 'bg-slate-100'}` }
      onClick={ handleClick }
      onKeyDown={ () => {} }
      role="button"
      tabIndex={ 0 }
    >
      <img src={ logo } alt="logo" className={ `aspect-square ${styles}` } />
    </div>
  );
}

TechLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  styles: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

TechLogo.defaultProps = {
  styles: '',
};

export default TechLogo;

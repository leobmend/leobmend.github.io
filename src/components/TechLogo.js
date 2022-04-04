import React from 'react';

function TechLogo({ logo, styles }) {
  return (
    <div className="flex mx-auto mb-5 justify-center items-center h-1/2 aspect-square">
      <img src={ logo } alt="logo" className={ `aspect-square ${styles}` } />
    </div>
  );
}

TechLogo.defaultProps = {
  styles: '',
}

export default TechLogo;

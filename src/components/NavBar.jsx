import React from 'react';

const NavBar = ({ onPrevClick, onNextClick, showPrev, showNext }) => {
  return (
    <div>
      {showPrev && <button onClick={onPrevClick}>Précédent</button>}
      {showNext && <button onClick={onNextClick}>Suivant</button>}
    </div>
  );
};

export default NavBar;

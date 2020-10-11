import React, { useContext } from 'react';
import GameContext from '../context/gameContext';

const Header = () => {
  const gameContext = useContext(GameContext);
  const { playerOne, playerTwo, title } = gameContext;

  return (
    <div className="header">
      <h3>{playerOne}</h3>
      <h1>{title}</h1>
      <h3>{playerTwo}</h3>
    </div>
  );
};

export default Header;

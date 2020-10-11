import React, { useContext } from 'react';
import GameContext from '../context/gameContext';

const Header = () => {
  const gameContext = useContext(GameContext);
  const { playerOne, playerTwo } = gameContext;

  return (
    <div className="header">
      <h3>{playerOne}</h3>
      <h1>Tic Tac Toe</h1>
      <h3>{playerTwo}</h3>
    </div>
  );
};

export default Header;

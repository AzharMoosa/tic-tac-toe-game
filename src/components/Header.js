import React, { useContext } from 'react';
import GameContext from '../context/gameContext';

const Header = () => {
  const gameContext = useContext(GameContext);
  const { playerOne, playerTwo, title, gameStatus } = gameContext;

  return (
    <div className="header">
      <h3>{`${gameStatus ? `${playerOne} - X` : ""}`}</h3>
      <h1>{title}</h1>
      <h3>{`${gameStatus ? `${playerTwo} - O` : ""}`}</h3>
    </div>
  );
};

export default Header;

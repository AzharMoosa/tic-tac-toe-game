import React, { useContext } from 'react';
import GameContext from '../../context/gameContext';

const Board = () => {
  const gameContext = useContext(GameContext);
  const { board, gameStatus } = gameContext;
  return (
    <div className={`game-board ${!gameStatus && 'hidden'}`}></div>
  );
};

export default Board;
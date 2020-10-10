import React, { useContext } from 'react';
import Square from './Square';
import GameContext from '../../context/gameContext';

const Board = () => {
  const gameContext = useContext(GameContext);
  const { board, gameStatus } = gameContext;

  return (
    <div className={`game-board ${!gameStatus ? 'hidden' : ''}`}>
      <div className="board-top">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;

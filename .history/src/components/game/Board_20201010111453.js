import React, { useContext } from 'react';
import Square from './Square';
import GameContext from '../../context/gameContext';

const Board = () => {
  const gameContext = useContext(GameContext);
  const { board, gameStatus } = gameContext;

  return (
    <div className={`game-board ${!gameStatus && 'hidden'}`}>
      {board.map((square, idx) => (
        <Square idx={idx} />
      ))}
    </div>
  );
};

export default Board;

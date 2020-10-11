import React, { useContext } from 'react';
import Square from './Square';
import GameContext from '../../context/gameContext';

const Board = () => {
  const gameContext = useContext(GameContext);
  const { board, firstTime } = gameContext;

  return (
    <div className={`game-board ${firstTime ? 'hidden' : ''}`}>
      {board.map((square, i) => (
        <Square square={square} i={i} key={i} />
      ))}
    </div>
  );
};

export default Board;

import React, { useContext } from 'react';
import Square from './Square';
import GameContext from '../../context/gameContext';

const Board = () => {
  const gameContext = useContext(GameContext);
  const { board, gameStatus } = gameContext;

  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  };

  return (
    <div
      className={`game-board ${style} ${!gameStatus ? 'hidden' : ''}`}
    >
      {board.map((square, i) => (
        <Square square={square} key={i} />
      ))}
    </div>
  );
};

export default Board;

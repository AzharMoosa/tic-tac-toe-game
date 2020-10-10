import React, { useContext } from 'react';
import Square from './Square';
import GameContext from '../../context/gameContext';

const Board = () => {
  const gameContext = useContext(GameContext);
  const { board, gameStatus } = gameContext;

  const determineRow = (index) => {
    if (index < 3) {
      return 'board-top';
    } else if (index < 6) {
      return 'board-middle';
    } else {
      return 'board-bottom';
    }
  };

  return (
    <div className={`game-board ${!gameStatus ? 'hidden' : ''}`}>
      {board.map((square, idx) => (
        <div className={`${determineRow(idx)}`}>
          <Square idx={idx} />
        </div>
      ))}
    </div>
  );
};

export default Board;

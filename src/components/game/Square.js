import React, { Fragment, useContext } from 'react';
import GameContext from '../../context/gameContext';

const Square = ({ square, i }) => {
  const gameContext = useContext(GameContext);
  const {
    placeSymbol,
    changePlayerTurn,
    playerTurn,
    board,
  } = gameContext;

  const playTurn = (idx) => {
    if (board[idx] !== '') {
      return;
    }

    const symbol = {
      symbol: `${playerTurn === 0 ? 'X' : 'O'}`,
      position: parseInt(idx),
    };
    placeSymbol(symbol);
    changePlayerTurn();
  };

  return (
    <Fragment>
      <button className="square" onClick={() => playTurn(i)}>
        {square}
      </button>
    </Fragment>
  );
};

export default Square;

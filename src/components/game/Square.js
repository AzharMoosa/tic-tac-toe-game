import React, { Fragment, useContext } from 'react';
import GameContext from '../../context/gameContext';

const Square = ({ square, i }) => {
  const gameContext = useContext(GameContext);
  const {
    placeSymbol,
    changePlayerTurn,
    playerTurn,
    board,
    checkWinner,
    checkTie,
    toggleGame,
    gameStatus,
    setTitle,
    playerOne,
    playerTwo
  } = gameContext;

  // Play Turn
  const playTurn = (idx) => {
    // Square Not Empty
    if (board[idx] !== '') {
      return;
    }
    
    // Place Symbol
    const symbol = {
      symbol: `${playerTurn === 0 ? 'X' : 'O'}`,
      position: parseInt(idx),
    };
    placeSymbol(symbol);

    // Check Winner
    if (checkWinner(symbol)) {
      // Toggle Game Status
      toggleGame()
      // Set Title to Winner
      let winner = playerTurn === 0 ? playerOne : playerTwo
      setTitle(winner + " Wins!")
    }

    // Check Tie
    if (checkTie(symbol) && gameStatus === true) {
      // Toggle Game Status
      toggleGame()
      // Set Title to Tie
      setTitle("Tie!")
    }

    // Next Turn
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

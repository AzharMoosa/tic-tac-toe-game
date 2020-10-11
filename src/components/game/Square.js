import React, { Fragment, useContext } from 'react';
import GameContext from '../../context/gameContext';

const Square = ({ square, i }) => {
  const gameContext = useContext(GameContext);
  const {
    placeSymbol,
    changePlayerTurn,
    playerTurn,
    board,
    ai,
    checkWinner,
    checkTie,
    toggleGame,
    toggleMenu,
    gameStatus,
    setTitle,
    playerOne,
    playerTwo,
    computerTurn
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
      // Toggle Main Menu
      toggleMenu()
    }

    // Check Tie
    if (checkTie(symbol) && gameStatus === true) {
      // Toggle Game Status
      toggleGame()
      // Set Title to Tie
      setTitle("Tie!")
      // Toggle Main Menu
      toggleMenu()
    }

    // Next Turn
    if (ai) {
      computerTurn()
    } else {
      changePlayerTurn();
    }
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

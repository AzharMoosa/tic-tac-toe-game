import React, { useContext, useState } from 'react';
import GameContext from '../../context/gameContext';

const ComputerMenu = ({ computerMenu, setComputerMenu }) => {
  const gameContext = useContext(GameContext);
  const [playerOneName, setPlayerOneName] = useState("")
  const { toggleGame, toggleAI, setPlayerOne, setPlayerTwo } = gameContext;

  const onClick = () => {
    if (playerOneName === "") {
      setPlayerOne("Player One")
    } else {
      setPlayerOne(playerOneName)
    }

    setPlayerTwo("Computer")
    setComputerMenu(false);
    toggleGame();
    toggleAI()
  };

  return (
    <div className={`main-menu ${!computerMenu && 'hidden'}`}>
      <h3>Play Against Computer</h3>
      <input
        type="text"
        className="player-input"
        placeholder="Enter Player Name..."
        value={playerOneName}
        onChange={(e) => setPlayerOneName(e.target.value)}
      />
      <button className="btn-small btn-secondary" onClick={onClick}>
        Play
      </button>
    </div>
  );
};

export default ComputerMenu;

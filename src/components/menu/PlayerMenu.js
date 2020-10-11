import React, { useContext, useState } from 'react';
import GameContext from '../../context/gameContext';

const PlayerMenu = ({ playerMenu, setPlayerMenu }) => {
  const gameContext = useContext(GameContext);
  const [playerOneName, setPlayerOneName] = useState("")
  const [playerTwoName, setPlayerTwoName] = useState("")
  const { toggleGame, setPlayerOne, setPlayerTwo, toggleFirstTime } = gameContext;

  const onClick = () => {
    if (playerOneName === "") {
      setPlayerOne("Player One")
    }

    if (playerTwoName === "") {
      setPlayerTwo("Player Two")
    } else {
      setPlayerOne(playerOneName);
      setPlayerTwo(playerTwoName);
    }

    setPlayerMenu(false);
    toggleGame();
    toggleFirstTime()
  };

  return (
    <div
      className={`player-menu main-menu ${!playerMenu && 'hidden'}`}
    >
      <h3>Play Against Opponent</h3>
      <input
        type="text"
        className="player-input"
        placeholder="Enter Player One Name..."
        value={playerOneName}
        onChange={(e) => setPlayerOneName(e.target.value)}
      />
      <input
        type="text"
        className="player-input"
        placeholder="Enter Player Two Name..."
        value={playerTwoName}
        onChange={(e) => setPlayerTwoName(e.target.value)}
      />
      <button className="btn-small btn-secondary" onClick={onClick}>
        Play
      </button>
    </div>
  );
};

export default PlayerMenu;

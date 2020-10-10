import React, { useContext } from 'react';
import GameContext from '../../context/gameContext';

const PlayerMenu = ({ playerMenu, setPlayerMenu }) => {
  const gameContext = useContext(GameContext);
  const { toggleGame } = gameContext;

  const onClick = () => {
    setPlayerMenu(false);
    toggleGame();
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
      />
      <input
        type="text"
        className="player-input"
        placeholder="Enter Player Two Name..."
      />
      <button className="btn-small btn-secondary" onClick={onClick}>
        Play
      </button>
    </div>
  );
};

export default PlayerMenu;

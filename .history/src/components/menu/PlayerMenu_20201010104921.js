import React from 'react';

const PlayerMenu = ({ playerMenu, setPlayerMenu }) => {
  const onClick = () => {
    setPlayerMenu(false);
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

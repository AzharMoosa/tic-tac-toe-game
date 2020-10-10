import React from 'react';
import { Link } from 'react-router-dom';

const ComputerMenu = ({ computerMenu, setComputerMenu }) => {
  const onClick = () => {
    setComputerMenu(false);
  };

  return (
    <div className={`main-menu ${!computerMenu && 'hidden'}`}>
      <h3>Play Against Computer</h3>
      <input
        type="text"
        className="player-input"
        placeholder="Enter Player Name..."
      />
      <button className="btn-small btn-secondary" onClick={onClick}>
        Play
      </button>
    </div>
  );
};

export default ComputerMenu;
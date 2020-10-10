import React, { Fragment, useState } from 'react';
import ComputerMenu from './ComputerMenu';
import PlayerMenu from './PlayerMenu';

const MainMenu = () => {
  const [mainMenu, setMainMenu] = useState(true);
  const [computerMenu, setComputerMenu] = useState(false);
  const [playerMenu, setPlayerMenu] = useState(false);

  const togglePlayerMenu = () => {
    setMainMenu(false);
    setPlayerMenu(true);
  };

  const toggleComputerMenu = () => {
    setMainMenu(false);
    setComputerMenu(true);
  };

  return (
    <Fragment>
      <div className={`main-menu ${!mainMenu && 'hidden'}`}>
        <h3>Welcome to Tic Tac Toe</h3>
        <div className="btns">
          <button
            className="btn btn-primary"
            onClick={toggleComputerMenu}
          >
            Play Against Computer
          </button>
          <button
            className="btn btn-secondary"
            onClick={togglePlayerMenu}
          >
            Play Against Opponent
          </button>
        </div>
        <h4>
          Created by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
            href="https://github.com/AzharMoosa"
          >
            Azhar Moosa
          </a>
        </h4>
      </div>

      <ComputerMenu
        computerMenu={computerMenu}
        setComputerMenu={setComputerMenu}
      />
      <PlayerMenu
        playerMenu={playerMenu}
        setPlayerMenu={setPlayerMenu}
      />
    </Fragment>
  );
};

export default MainMenu;

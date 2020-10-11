import React, { Fragment, useState, useContext } from 'react';
import GameContext from '../../context/gameContext';
import ComputerMenu from './ComputerMenu';
import PlayerMenu from './PlayerMenu';

const MainMenu = () => {
  const gameContext = useContext(GameContext);
  const { toggleMenu, mainMenu, reset } = gameContext;
  const [computerMenu, setComputerMenu] = useState(false);
  const [playerMenu, setPlayerMenu] = useState(false);

  const togglePlayerMenu = () => {
    toggleMenu();
    reset();
    setPlayerMenu(true);
  };

  const toggleComputerMenu = () => {
    toggleMenu();
    reset();
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

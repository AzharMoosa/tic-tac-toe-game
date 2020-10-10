import React, { Fragment } from 'react';
import Header from "./components/Header"
import MainMenu from "./components/menu/MainMenu"
import Board from "./components/game/Board"
import GameState from "./context/GameState"
import './App.css';

function App() {
  return (
    <GameState>
        <Header />
        <MainMenu />
        <Board />
    </GameState>
  );
}

export default App;

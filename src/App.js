import React, { Fragment } from 'react';
import Header from "./components/Header"
import MainMenu from "./components/menu/MainMenu"
import './App.css';

function App() {
  return (
    <Fragment>
        <Header />
        <MainMenu />
    </Fragment>
  );
}

export default App;

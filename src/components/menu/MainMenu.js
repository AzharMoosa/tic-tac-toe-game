import React from 'react'

const MainMenu = () => {
    return (
        <div className="main-menu">
            <h3>Welcome to Tic-Tac-Toe</h3>
            <div className="btns">
                <button className="btn btn-primary">Play Against Computer</button>
                <button className="btn btn-secondary">Play Against Opponent</button>
            </div>
            <h4>Created by <a target="_blank" rel="noopener noreferrer" className="highlight" href="https://github.com/AzharMoosa">Azhar Moosa</a></h4>
        </div>
    )
}

export default MainMenu

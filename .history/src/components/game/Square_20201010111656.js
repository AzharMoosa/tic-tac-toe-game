import React from 'react';

const Square = ({ idx }) => {
  const determineRow = (index) => {
    if (index < 3) {
      return 'board-top';
    } else if (index < 6) {
      return 'board-middle';
    } else {
      return 'board-bottom';
    }
  };

  return <div className={`square ${determineRow(idx)}`}></div>;
};

export default Square;

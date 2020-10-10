import React, { Fragment } from 'react';

const Square = ({ square, i }) => {
  const determineRow = (index) => {
    if (index < 3) {
      return 'board-top';
    } else if (index < 6) {
      return 'board-middle';
    }
  };

  return (
    <Fragment>
      <div className={`square ${determineRow}`}>{square}</div>
    </Fragment>
  );
};

export default Square;

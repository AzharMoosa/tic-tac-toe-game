import React from 'react';

const Square = ({ idx }) => {
  const determineRow = () => {};

  return <div className={`square ${determineRow(idx)}`}></div>;
};

export default Square;

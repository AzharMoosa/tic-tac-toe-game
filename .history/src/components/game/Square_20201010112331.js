import React from 'react';

const Square = () => {
  return (
    <div className={`${determineRow(idx)}`}>
      <div className="square"></div>
    </div>
  );
};

export default Square;

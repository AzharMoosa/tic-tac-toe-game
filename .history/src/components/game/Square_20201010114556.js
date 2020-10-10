import React from 'react';

const Square = ({ square }) => {
  const determineRow = () => {};

  return (
    <div className={`${determineRow}`}>
      <div className="square">{square}</div>
    </div>
  );
};

export default Square;

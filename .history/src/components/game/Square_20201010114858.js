import React, { Fragment } from 'react';

const Square = ({ square, i }) => {
  return (
    <Fragment>
      <div className="square">{square}</div>
    </Fragment>
  );
};

export default Square;

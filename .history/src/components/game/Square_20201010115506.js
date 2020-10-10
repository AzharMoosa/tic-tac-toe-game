import React, { Fragment } from 'react';

const Square = ({ square, i }) => {
  return (
    <Fragment>
      <button className="square">{square}</button>
    </Fragment>
  );
};

export default Square;

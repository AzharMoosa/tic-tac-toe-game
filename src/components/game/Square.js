import React, { Fragment } from 'react';

const Square = ({ square }) => {
  return (
    <Fragment>
      <button className="square">{square}</button>
    </Fragment>
  );
};

export default Square;

import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '68px',
        margin: 'auto',
        display: 'block',
        position: 'absolute'
      }}
      alt='Loading...'
    />
  </Fragment>
);

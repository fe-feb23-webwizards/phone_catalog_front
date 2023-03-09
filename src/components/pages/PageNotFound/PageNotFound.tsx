/* eslint-disable react/no-unescaped-entities */
import React, { memo } from 'react';
import './PageNotFound.scss';

export const PageNotFound: React.FC = memo(() => (
  <div className="site">
    <div className="sketch">
      <div className="bee-sketch red"></div>
      <div className="bee-sketch blue"></div>
    </div>

    <h1 id="text">
      Oh, sorry!
      <small>Nothing found</small>
    </h1>
  </div>
));

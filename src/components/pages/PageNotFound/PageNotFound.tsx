import React, { memo } from 'react';
import './PageNotFound.scss';

export const PageNotFound: React.FC = memo(() => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <h2 className="not-found__caption">Page Not Found</h2>
    <div className="card__flex">
      <a
        href="/"
        className="card__button"
      >
        Go home
      </a>
    </div>
  </div>
));

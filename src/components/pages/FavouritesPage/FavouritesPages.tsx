import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCards } from '../../PhoneCards/PhoneCards';
import phones from '../../../data/phones.json';
import './FavouritesPages.scss';

const favourites = phones.slice(0, 6);

export const Favourites: React.FC = memo(() => {
  const [isLoading] = useState(false);

  return (
    <div className="container">
      <div className="back-block">
        <Link to="/home" className="back-block__home">
          <div className="back-block__home--inside" />
        </Link>
        <div className="back-block__arrow"></div>
        <p className="back-block__text">Favourites</p>
      </div>

      {favourites.length > 0 ? (
        <>
          <h1 className="page-title">Favourites</h1>
          <p className="products-amount">
            {`${favourites.length} items`}
          </p>
          <PhoneCards cards={favourites} isLoading={isLoading} />
        </>
      ) : (
        <h1 className="subtitle">No favourites yet</h1>
      )}
    </div>
  );
});

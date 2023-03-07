import React, { memo, useEffect, useState } from 'react';
import { PhoneCards } from '../../PhoneCards/PhoneCards';
import './FavouritesPages.scss';
import { Breadcrump } from '../../Breadcrump/Breadcrump';
import { PhoneFromAPI } from '../../../types/PhoneFromAPI';
import { getPhone } from '../../../api/phones';

export const Favourites: React.FC = memo(() => {
  const [isLoading] = useState(false);
  const [phones, setPhones] = useState<PhoneFromAPI[]>([]);

  console.log(phones);

  useEffect(() => {
    try {
      getPhone(1, 6)
        .then(setPhones);
    } catch (error) {
      setPhones([]);
    }
  }, []);

  return (
    <div className="container">
      <Breadcrump pageName="Favourites" />

      {phones.length > 0 ? (
        <>
          <h1 className="page-title">Favourites</h1>
          <p className="products-amount">
            {`${phones.length} items`}
          </p>
          <PhoneCards cards={phones} isLoading={isLoading} />
        </>
      ) : (
        <h1 className="subtitle">No favourites yet</h1>
      )}
    </div>
  );
});

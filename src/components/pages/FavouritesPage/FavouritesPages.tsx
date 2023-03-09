import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { PhoneCards } from '../../PhoneCards/PhoneCards';
import './FavouritesPages.scss';
import { Breadcrump } from '../../Breadcrumbs/Breadcrumbs';
import { Phone } from '../../../types/Phone';
// import { getAllPhones } from '../../../api/phones';
import phonesList from '../../../data/phones.json';

import {
  getLocalStorageData,
  StorageKeys,
} from '../../../hooks/useLocalStorage';

export const Favourites: React.FC = memo(() => {
  const [isLoading] = useState(false);
  const [phones, setPhones] = useState<Phone[]>([]);

  const favCountActual = useSelector((state: RootState) => state.counter.favouritesValue);
  const shouldShowDiscount = true;

  useEffect(() => {
    const idToFavourites: string[] = getLocalStorageData(StorageKeys.FAVOURITES);
    const favorPhones = phonesList.filter(phone => idToFavourites.includes(phone.phoneId));

    setPhones(favorPhones);
  }, [favCountActual]);

  return (
    <div className="container">
      <Breadcrump pageName="Favourites" />

      {phones.length > 0 ? (
        <>
          <h1 className="page-title">Favourites</h1>
          <p className="products-amount">
            {`${phones.length} items`}
          </p>
          <PhoneCards
            cards={phones}
            isLoading={isLoading}
            shouldShowDiscount={shouldShowDiscount}
          />
        </>
      ) : (
        <h1 className="subtitle">No favourites yet</h1>
      )}
    </div>
  );
});

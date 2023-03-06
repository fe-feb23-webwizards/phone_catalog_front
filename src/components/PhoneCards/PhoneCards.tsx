import React, { memo } from 'react';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhoneCards.scss';
import {
  getLocalStorageData,
  StorageKeys,
} from '../../hooks/useLocalStorage';

type Props = {
  cards: Phone[],
  isLoading: boolean,
};

export const PhoneCards: React.FC<Props> = memo(({ cards, isLoading }) => {
  if (isLoading) {
    return (
      <h1>Is loading...</h1>
    );
  }

  const phonesToCart = getLocalStorageData(StorageKeys.CART);
  const phonesToFavourites = getLocalStorageData(StorageKeys.FAVOURITES);

  return (
    <section className="catalog">
      {cards.map(card => {
        const isInCart = phonesToCart.includes(card.id);
        const isInFavourites = phonesToFavourites.includes(card.id);

        return (
          <PhoneCard
            isInCart={isInCart}
            isInFavourites={isInFavourites}
            phone={card}
            key={card.id}
          />
        );
      })}
    </section>
  );
});

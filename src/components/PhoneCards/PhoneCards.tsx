import React, { memo } from 'react';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhoneCards.scss';
import {
  getLocalStorageData,
  StorageKeys,
} from '../../hooks/useLocalStorage';

type Props = {
  isLoading: boolean;
  cards: Phone[];
  shouldShowDiscount: boolean;
};

export const PhoneCards: React.FC<Props> = memo(({ cards, isLoading, shouldShowDiscount }) => {
  const shouldShowDiscountOnCard = shouldShowDiscount;

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
        const isInCart = phonesToCart.includes(card.phoneId);
        const isInFavourites = phonesToFavourites.includes(card.phoneId);

        return (
          <PhoneCard
            isInCart={isInCart}
            isInFavourites={isInFavourites}
            phone={card}
            key={card.id}
            shouldShowDiscount={shouldShowDiscountOnCard}
          />
        );
      })}
    </section>
  );
});

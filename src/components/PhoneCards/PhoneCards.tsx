import React, { memo } from 'react';
import { PhoneFromAPI } from '../../types/PhoneFromAPI';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhoneCards.scss';

type Props = {
  isLoading: boolean;
  cards: PhoneFromAPI[];
  shouldShowDiscount: boolean;
};

export const PhoneCards: React.FC<Props> = memo(({ cards, isLoading, shouldShowDiscount }) => {
  const shouldShowDiscountOnCard = shouldShowDiscount;

  if (isLoading) {
    return (
      <h1>Is loading...</h1>
    );
  }

  return (
    <section className="catalog">
      {cards.map(card => (
        <PhoneCard phone={card} key={card.id} shouldShowDiscount={shouldShowDiscountOnCard} />
      ))}
    </section>
  );
});

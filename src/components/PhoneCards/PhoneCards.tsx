import React, { memo } from 'react';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhoneCards.scss';

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

  return (
    <div className="catalog">
      {cards.map(card => (
        <PhoneCard phone={card} key={card.id} />
      ))}
    </div>
  );
});

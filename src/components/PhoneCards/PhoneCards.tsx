import React, { memo, useState, useEffect } from 'react';
import { getPhones } from '../../api/phones';
import { PhoneFromAPI } from '../../types/PhoneFromAPI';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhoneCards.scss';

type Props = {
  isLoading: boolean,
};

export const PhoneCards: React.FC<Props> = memo(({ isLoading }) => {
  const [phones, setPhones] = useState<PhoneFromAPI[]>([]);

  console.log(phones);

  useEffect(() => {
    try {
      getPhones()
        .then(setPhones);
    } catch (error) {
      setPhones([]);
    }
  }, []);
  if (isLoading) {
    return (
      <h1>Is loading...</h1>
    );
  }

  return (
    <section className="catalog">
      {phones.map(card => (
        <PhoneCard phone={card} key={card.id} />
      ))}
    </section>
  );
});

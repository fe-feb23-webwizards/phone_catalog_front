import React from 'react';
import './NewModelsList.scss';
// import heart from '../../stylesScss/images/heart.svg';
import phones from '../../data/phones.json';
import { PhoneCard } from '../PhoneCard/PhoneCard';

export const NewModelsList = () => {
  const newModelsPhones = phones.sort((a, b) => b.year - a.year);

  newModelsPhones.length = 4;

  return (
    <section>
      <h1 className="title">Brand new models</h1>
      <div className="catalog">
        {newModelsPhones.map(el => (
          <PhoneCard phone={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

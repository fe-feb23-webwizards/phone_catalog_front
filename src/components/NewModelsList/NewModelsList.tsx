import React, { useState } from 'react';
import './NewModelsList.scss';
import phones from '../../data/phones.json';
import { PhoneCard } from '../PhoneCard/PhoneCard';

export const NewModelsList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === phones.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? phones.length - 1 : currentSlide - 1);
  };

  const slidesToShow = phones.sort((a, b) => b.year - a.year).slice(currentSlide, currentSlide + 4);

  return (
    <section className="newModels">
      <h1 className="newModels__title">Brand new models</h1>
      <div className="newModels__slider-control">
        <button type="button" className="slider-control__button" onClick={prevSlide}>
          Prev
        </button>
        <button type="button" className="slider-control__button" onClick={nextSlide}>
          Next
        </button>
      </div>
      <div className="catalog">
        {slidesToShow.map(el => (
          <PhoneCard phone={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhonesList.scss';
import { Phone } from '../../types/Phone';
import arrowLeft from '../../stylesScss/images/left-arrow.svg';
import arrowRight from '../../stylesScss/images/right-arrow.svg';

type Props = {
  title: string,
  phones: Phone[],
};

export const PhonesList = (props: Props) => {
  const { title, phones } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === phones.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? phones.length - 1 : currentSlide - 1);
  };

  const slidesToShow = phones.slice(currentSlide, currentSlide + 4);

  return (
    <section className="phonesList">
      <div className="scroll">
        <h1 className="scroll__title">{title}</h1>
        <div className="scroll_block">
          <button type="button" className="scroll__left" onClick={prevSlide}>
            <img src={arrowLeft} alt="arrow" className="scroll__icon" />
          </button>
          <button type="button" className="scroll__right" onClick={nextSlide}>
            <img src={arrowRight} alt="arrow" className="scroll__icon" />
          </button>
        </div>
      </div>
      <div className="catalog">
        {slidesToShow.map(el => (
          <PhoneCard phone={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './PhonesList.scss';
import arrowLeft from '../../styles/images/left-arrow.svg';
import arrowRight from '../../styles/images/right-arrow.svg';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader/Loader';

type Props = {
  title: string,
  phones: Phone[],
};

export const PhonesList = (props: Props) => {
  const { title, phones } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const shouldShowDiscount = phones.every(el => el.price < 800);

  const nextSlide = () => {
    if (currentSlide === phones.length - slidesPerView) {
      return;
    }

    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    }

    setCurrentSlide(currentSlide - 1);
  };

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth < 1200) {
      setSlidesPerView(2);
    }

    if (windowWidth < 640) {
      setSlidesPerView(1);
    }
  }, []);

  const slidesToShow = phones.slice(currentSlide, currentSlide + slidesPerView);

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
      <div className={`catalog catalog--${slidesPerView}`}>
        {!slidesToShow.length ? (
          <Loader />
        ) : (
          slidesToShow.map(el => (
            <PhoneCard phone={el} key={el.id} shouldShowDiscount={shouldShowDiscount} />
          ))
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import './NewModelsList.scss';
import heart from '../../stylesScss/images/heart.svg';
import phones from '../../data/phones.json';

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
          <div className="card" key={el.id}>
            <img src={`../../data/${el.image}`} alt="iphone" className="card__img" />
            <h2 className="card__name">{el.name}</h2>
            <span className="card__price">{`${el.price}$`}</span>
            <div className="card__underline"></div>
            <div className="card__description">
              <span className="description__title">Screen</span>
              <span className="description__value">{el.screen}</span>
            </div>
            <div className="card__description">
              <span className="description__title">Capacity</span>
              <span className="description__value">{el.capacity}</span>
            </div>
            <div className="card__description">
              <span className="description__title">RAM</span>
              <span className="description__value">{el.ram}</span>
            </div>
            <div className="card__flex">
              <a href="/" className="card__button">
                Add to cart
              </a>
              <button type="button" className="card__add-to-favorite">
                <img src={heart} alt="favorite" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

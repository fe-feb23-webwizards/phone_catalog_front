import React from 'react';
import './NewModelsList.scss';
import heart from '../../stylesScss/images/heart.svg';
import phones from '../../data/phones.json';

export const NewModelsList = () => {
  const newModelsPhones = phones.sort((a, b) => b.year - a.year);

  newModelsPhones.length = 4;

  return (
    <section>
      <h1 className="title">Brand new models</h1>
      <div className="catalog">
        {newModelsPhones.map(el => (
          <div className="card" key={el.id}>

            <img
              src={el.image}
              alt="iphone"
              className="card__img"
            />
            <h2 className="card__name">
              {el.name}
            </h2>

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
              <a
                href="/"
                className="card__button"
              >
                Add to cart
              </a>

              <button
                type="button"
                className="card__add-to-favorite"
              >
                <img src={heart} alt="favorite" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

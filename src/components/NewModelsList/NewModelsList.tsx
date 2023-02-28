import React from 'react';
import './NewModelsList.scss';
import heart from '../../stylesScss/images/heart.svg';

export const NewModelsList = () => {
  return (
    <section>
      <h1 className="title">Brand new models</h1>
      <div className="catalog">
        <div className="card">
          <img
            className="card__img"
            src="https://techport.net.ua/image/cache/catalog/foto/8fc87a20d1926d27205d8f4da6ad15c9-700x700.jpg"
            alt="iphone"
          />

          <h2 className="card__name">
            Apple iPhone 14 Pro 128GB Silver MQ023
          </h2>

          <span className="card__price">$2,199</span>

          <div className="card__underline"></div>

          <div className="card__description">
            <span className="description__title">Screen</span>
            <span className="description__value">6.1 Oled</span>
          </div>
          <div className="card__description">
            <span className="description__title">Capacity</span>
            <span className="description__value">128Gb</span>
          </div>
          <div className="card__description">
            <span className="description__title">RAM</span>
            <span className="description__value">6 GB</span>
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
        <div className="card">
          <img
            className="card__img"
            src="https://techport.net.ua/image/cache/catalog/foto/8fc87a20d1926d27205d8f4da6ad15c9-700x700.jpg"
            alt="iphone"
          />

          <h2 className="card__name">
            Apple iPhone 14 Pro 128GB Silver MQ023
          </h2>

          <span className="card__price">$2,199</span>

          <div className="card__underline"></div>

          <div className="card__description">
            <span className="description__title">Screen</span>
            <span className="description__value">6.1 Oled</span>
          </div>
          <div className="card__description">
            <span className="description__title">Capacity</span>
            <span className="description__value">128Gb</span>
          </div>
          <div className="card__description">
            <span className="description__title">RAM</span>
            <span className="description__value">6 GB</span>
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
        <div className="card">
          <img
            className="card__img"
            src="https://techport.net.ua/image/cache/catalog/foto/8fc87a20d1926d27205d8f4da6ad15c9-700x700.jpg"
            alt="iphone"
          />

          <h2 className="card__name">
            Apple iPhone 14 Pro 128GB Silver MQ023
          </h2>

          <span className="card__price">$2,199</span>

          <div className="card__underline"></div>

          <div className="card__description">
            <span className="description__title">Screen</span>
            <span className="description__value">6.1 Oled</span>
          </div>
          <div className="card__description">
            <span className="description__title">Capacity</span>
            <span className="description__value">128Gb</span>
          </div>
          <div className="card__description">
            <span className="description__title">RAM</span>
            <span className="description__value">6 GB</span>
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
        <div className="card">
          <img
            className="card__img"
            src="https://techport.net.ua/image/cache/catalog/foto/8fc87a20d1926d27205d8f4da6ad15c9-700x700.jpg"
            alt="iphone"
          />

          <h2 className="card__name">
            Apple iPhone 14 Pro 128GB Silver MQ023
          </h2>

          <span className="card__price">$2,199</span>

          <div className="card__underline"></div>

          <div className="card__description">
            <span className="description__title">Screen</span>
            <span className="description__value">6.1 Oled</span>
          </div>
          <div className="card__description">
            <span className="description__title">Capacity</span>
            <span className="description__value">128Gb</span>
          </div>
          <div className="card__description">
            <span className="description__title">RAM</span>
            <span className="description__value">6 GB</span>
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
      </div>
    </section>
  );
};

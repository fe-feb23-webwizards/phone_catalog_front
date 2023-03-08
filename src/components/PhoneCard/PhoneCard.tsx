import React, { memo, useState } from 'react';
import heart from '../../styles/images/heart.svg';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
  shouldShowDiscount: boolean;
};

export const PhoneCard: React.FC<Props> = memo(({ phone, shouldShowDiscount }) => {
  const {
    id,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    image,
  } = phone;

  const [shouldShowDiscountOnCard, setShouldShowDiscountOnCard] = useState(shouldShowDiscount);

  if (!phone) {
    setShouldShowDiscountOnCard(true);
  }

  const phoneImage = `https://raw.githubusercontent.com/fe-feb23-webwizards/phone_catalog_front/main/src/data/${image}`;

  return (
    <div className="card" key={id}>

      <img
        src={phoneImage}
        alt="iphone"
        className="card__img"
      />
      <h2 className="card__name">
        {name}
      </h2>

      <span className="card__price">{`${price}$`}</span>
      {shouldShowDiscountOnCard && <span className="card__price-regular">{`${fullPrice}$`}</span>}

      <div className="card__underline"></div>

      <div className="card__description">
        <span className="description__title">Screen</span>
        <span className="description__value">{screen}</span>
      </div>
      <div className="card__description">
        <span className="description__title">Capacity</span>
        <span className="description__value">{capacity}</span>
      </div>
      <div className="card__description">
        <span className="description__title">RAM</span>
        <span className="description__value">{ram}</span>
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
  );
});

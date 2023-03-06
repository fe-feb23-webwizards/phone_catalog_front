import React, { memo, useState, useEffect } from 'react';
import { Phone } from '../../types/Phone';
import heart from '../../styles/images/heart.svg';
import heartActive from '../../styles/images/heart-active.svg';
import { addToLocalStorage, deleteFromLocalStorage, StorageKeys } from '../../hooks/useLocalStorage';

type Props = {
  phone: Phone,
  isInCart: boolean;
  isInFavourites: boolean;
};

export const PhoneCard: React.FC<Props> = memo(({ phone, isInCart, isInFavourites }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourites, setIsFavourites] = useState(false);

  useEffect(() => {
    setIsAdded(isInCart);
    setIsFavourites(isInFavourites);
  }, []);

  const {
    id,
    name,
    price,
    screen,
    capacity,
    ram,
    image,
  } = phone;

  const phoneImage = `https://raw.githubusercontent.com/fe-feb23-webwizards/phone_catalog_front/main/src/data/${image}`;

  const onCartClick = (keyName: StorageKeys) => {
    if (isAdded) {
      deleteFromLocalStorage({ id, key: keyName });
    } else {
      addToLocalStorage({ id, key: keyName });
    }

    if (keyName === StorageKeys.CART) {
      setIsAdded(!isAdded);
    } else {
      setIsFavourites(!isFavourites);
    }
  };

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
        <button
          type="button"
          className="card__button"
          onClick={() => onCartClick(StorageKeys.CART)}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </button>

        <button
          type="button"
          className="card__add-to-favorite"
          onClick={() => onCartClick(StorageKeys.FAVOURITES)}
        >
          <img src={isFavourites ? heartActive : heart} alt="favorite" />
        </button>
      </div>

    </div>
  );
});

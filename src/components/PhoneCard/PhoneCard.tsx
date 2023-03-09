import React, { memo, useState, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Phone } from '../../types/Phone';
import heart from '../../styles/images/heart.svg';
import heartActive from '../../styles/images/heart-active.svg';
import {
  addToLocalStorage, deleteFromLocalStorage, getLocalStorageData, StorageKeys,
} from '../../hooks/useLocalStorage';
import {
  decrementCart,
  incrementCart,
  incrementFavourites,
  decrementFavourites,
  setFavouritesValue,
} from '../Header/headerSlice.slice';

type Props = {
  phone: Phone,
  isInCart: boolean;
  isInFavourites: boolean;
  shouldShowDiscount: boolean;
};

export const PhoneCard: React.FC<Props> = memo(({
  phone, isInCart, isInFavourites, shouldShowDiscount,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourites, setIsFavourites] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsAdded(isInCart);
    setIsFavourites(isInFavourites);
  }, []);

  const {
    id,
    phoneId,
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

  const onCartClick = () => {
    if (isAdded) {
      deleteFromLocalStorage({ id, key: StorageKeys.CART });
      dispatch(decrementCart());
    } else {
      addToLocalStorage({ id, key: StorageKeys.CART });
      dispatch(incrementCart());
    }

    setIsAdded(!isAdded);
  };

  const onFavouritesClick = () => {
    if (isFavourites) {
      deleteFromLocalStorage({ id, key: StorageKeys.FAVOURITES });
      dispatch(decrementFavourites());
    } else {
      addToLocalStorage({ id, key: StorageKeys.FAVOURITES });
      dispatch(incrementFavourites());
    }

    setIsFavourites(!isFavourites);
    const storageArray: string[] = getLocalStorageData(StorageKeys.FAVOURITES);

    dispatch(setFavouritesValue(storageArray.length));
  };

  return (
    <div className="card" key={id}>

      <Link to={`/phones/${phoneId}`}>
        <img
          src={phoneImage}
          alt="iphone"
          className="card__img"
        />
        <h2 className="card__name">
          {name}
        </h2>
      </Link>

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
        <button
          type="button"
          className={cn(
            'card__button',
            { 'card__button--isAdded': isAdded },
          )}
          onClick={() => onCartClick()}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </button>

        <button
          type="button"
          className="card__add-to-favorite"
          onClick={() => onFavouritesClick()}
        >
          <img src={isFavourites ? heartActive : heart} alt="favorite" />
        </button>
      </div>

    </div>
  );
});

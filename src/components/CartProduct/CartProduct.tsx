import React, { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementCart, incrementCart } from '../Header/headerSlice.slice';
import { Phone } from '../../types/Phone';
import deleteButton from '../pages/CartPage/imgCart/icon_close.svg';
import './CartProduct.scss';
import {
  getLocalStorageData,
  delStorageElement,
  addToLocalStorage,
  StorageKeys,
} from '../../hooks/useLocalStorage';

type Props = {
  product: Phone;
  total: number;
  deleteProduct: (id: string) => void;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

export const CartProduct: React.FC<Props> = memo(({
  product, total, deleteProduct, setTotal,
}) => {
  const [productCounter, setProductCounter] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const storageArray = getLocalStorageData(StorageKeys.CART);

    const idCount = storageArray.filter((el: string) => el === product.phoneId).length;

    setProductCounter(idCount);
  }, []);

  const onPlusClick = (id: string) => {
    addToLocalStorage({ id, key: StorageKeys.CART });

    setProductCounter(productCounter + 1);
    setTotal(total + product.price);
    dispatch(incrementCart());
  };

  const onMinusClick = (id: string) => {
    delStorageElement(id);

    setProductCounter(productCounter - 1);
    setTotal(total - product.price);
    dispatch(decrementCart());
  };

  const phoneImage = `https://raw.githubusercontent.com/fe-feb23-webwizards/phone_catalog_front/main/src/data/${product.image}`;

  return (
    <div className="product">
      <div className="product__info">
        <img
          className="product__info__deleteButton"
          onClick={() => {
            deleteProduct(product.phoneId);
            setTotal(total - (product.price * productCounter));
          }}
          aria-hidden="true"
          src={deleteButton}
          alt="deleteButton"
        />
        <Link to={`/phones/${product.phoneId}`}>
          <img
            className="product__info__img"
            src={phoneImage}
            alt="imageIphone"
          />
        </Link>

        <Link to={`/phones/${product.phoneId}`}>
          <div
            className="product__info__title"
          >
            {product.name}
          </div>
        </Link>

      </div>
      <div className="product__counting">
        <div className="product__counting__quantity">
          <button
            disabled={productCounter === 1}
            type="button"
            className="button__counting button__counting--minus"
            onClick={() => onMinusClick(product.phoneId)}
          >
          </button>
          <div>{productCounter}</div>
          <button
            disabled={productCounter === 10}
            type="button"
            className="button__counting button__counting--plus"
            onClick={() => onPlusClick(product.phoneId)}
          >
          </button>
        </div>

        <div className="product__counting__price">{`$${product.price * productCounter}`}</div>
      </div>
    </div>
  );
});

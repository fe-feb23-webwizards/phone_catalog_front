import React, { memo, useEffect, useState } from 'react';
import elementBack from './imgCart/elemBack.svg';
import deleteButton from './imgCart/icon_close.svg';
import buttonMinus from './imgCart/button-.svg';
import buttonPlus from './imgCart/button+.svg';
import './CartPage.scss';
import phones from '../../../data/phones.json';
import { Phone } from '../../../types/Phone';
import {
  getLocalStorageData,
  deleteFromLocalStorage,
  StorageKeys,
} from '../../../hooks/useLocalStorage';

export const Cart: React.FC = memo(() => {
  const [phonesToCart, setPhonesToCart] = useState<Phone[]>([]);

  useEffect(() => {
    const storageArray = getLocalStorageData(StorageKeys.CART);
    const addedProductsToCart = phones.filter(phone => (storageArray.includes(phone.id)));

    setPhonesToCart(addedProductsToCart);
  }, []);

  const deleteProduct = (id: string) => {
    deleteFromLocalStorage({ id, key: StorageKeys.CART });

    const updatedPhones = phonesToCart.filter(phone => phone.id !== id);

    setPhonesToCart(updatedPhones);
  };

  return (
    <div className="cart">
      <div className="navBack">
        <img className="navBack__elementBack" src={elementBack} alt="elementBack" />
        <div className="navBack__text">Back</div>
      </div>

      <div className="title">Cart</div>

      <div className="order">
        <div className="goods">
          {phonesToCart.map(product => {
            const phoneImage = `https://raw.githubusercontent.com/fe-feb23-webwizards/phone_catalog_front/main/src/data/${product.image}`;
            // тут пропишу логіку роботи з каунтером

            return (
              <div key={product.id} className="product">
                <div className="product__info">
                  <img
                    // className='deleteButton'
                    onClick={() => deleteProduct(product.id)}
                    aria-hidden="true"
                    src={deleteButton}
                    alt="deleteButton"
                  />
                  <img
                    className="product__info__img"
                    src={phoneImage}
                    alt="imageIphone"
                  />

                  <div
                    className="product__info__title"
                  >
                    {product.name}
                  </div>
                </div>
                <div className="product__counting">
                  <div className="product__counting__quantity">
                    <div>
                      <img src={buttonMinus} alt="buttonMinus" />
                    </div>
                    <div>1</div>
                    <div>
                      <img src={buttonPlus} alt="buttonPlus" />
                    </div>
                  </div>

                  <div className="product__counting__price">{product.price}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="total">
          <div className="total__price">$2657</div>
          <div className="total__title">
            {`Total for ${phonesToCart.length} ${phonesToCart.length === 1 ? 'item' : 'items'}`}
          </div>
          <div className="total__checkout">
            <button className="total__checkout__but" type="button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
});

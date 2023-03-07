import React, { memo, useEffect, useState } from 'react';
import elementBack from './imgCart/elemBack.svg';
import './CartPage.scss';
import phones from '../../../data/phones.json';
import { Phone } from '../../../types/Phone';
import {
  getLocalStorageData,
  deleteFromLocalStorage,
  StorageKeys,
} from '../../../hooks/useLocalStorage';
import { CartProduct } from '../../CartProduct/CartProduct';

export const Cart: React.FC = memo(() => {
  const [phonesToCart, setPhonesToCart] = useState<Phone[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storageArray = getLocalStorageData(StorageKeys.CART);
    const addedProductsToCart = phones.filter(phone => (storageArray.includes(phone.id)));

    setPhonesToCart(addedProductsToCart);
  }, []);

  // гівнокод для відображення суми - якось !?!
  useEffect(() => {
    const storageArray = getLocalStorageData(StorageKeys.CART);
    const prodFromStorage = [...JSON.parse(storageArray)];

    const prodPrices = prodFromStorage
      .map(idEl => phonesToCart.find(item => item.id === idEl)?.price);

    const filteredProdPrices = prodPrices.filter(el => el !== undefined);

    const sum = filteredProdPrices.reduce((currentSum, item) => {
      if (item && currentSum) {
        return currentSum + item;
      }

      return currentSum;
    }, 0);

    if (sum) {
      setTotal(sum);
    }
  }, [total]);

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
          {phonesToCart.map(product => (
            <CartProduct
              key={product.id}
              setTotal={setTotal}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>

        <div className="total">
          <div className="total__price">111</div>
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

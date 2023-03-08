import React, { memo, useEffect, useState } from 'react';
import elementBack from './imgCart/elemBack.svg';
import './CartPage.scss';
import phones from '../../../data/phones.json';
import { Phone } from '../../../types/Phone';
import {
  getLocalStorageData,
  deleteFromLocalStorage,
  StorageKeys,
  deleteAllLocalFromCart,
} from '../../../hooks/useLocalStorage';
import { CartProduct } from '../../CartProduct/CartProduct';
import deleteButton from './imgCart/icon_close.svg';

export const Cart: React.FC = memo(() => {
  const [phonesToCart, setPhonesToCart] = useState<Phone[]>([]);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const storageArray: string[] = getLocalStorageData(StorageKeys.CART);
    const addedProductsToCart = phones.filter(phone => (storageArray.includes(phone.id)));

    const prodPrices = storageArray
      .map(idEl => {
        const productObject = phones.find(item => item.id === idEl);

        return productObject ? productObject.price : 0;
      });

    const sum = prodPrices.reduce((currentSum, item) => {
      return currentSum + item;
    }, 0);

    setPhonesToCart(addedProductsToCart);
    setTotal(sum);
  }, []);

  const deleteProduct = (id: string) => {
    deleteFromLocalStorage({ id, key: StorageKeys.CART });

    const updatedPhones = phonesToCart.filter(phone => phone.id !== id);

    setPhonesToCart(updatedPhones);
  };

  const deleteAllProduct = () => {
    deleteAllLocalFromCart();
    setPhonesToCart([]);
    setTotal(0);
    setModalIsOpen(true);
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
              total={total}
              setTotal={setTotal}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>

        <div className="total">
          <div className="total__price">{total}</div>
          <div className="total__title">
            {`Total for ${phonesToCart.length} ${phonesToCart.length === 1 ? 'item' : 'items'}`}
          </div>
          <div className="total__checkout">
            <button
              className="total__checkout__but"
              type="button"
              onClick={() => deleteAllProduct()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {modalIsOpen && (
        <div className="modal">
          <button
            type="button"
            className="modal__delBut"
            onClick={() => setModalIsOpen(false)}
          >
            <img src={deleteButton} alt="deleteButton" />
          </button>
          <p>Замовлення прийнято! Дякуємо та гарного дня!</p>
        </div>
      )}
    </div>
  );
});

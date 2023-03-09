import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartValue } from '../../Header/headerSlice.slice';
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
// import deleteButton from './imgCart/icon_close.svg';
import { RootState } from '../../../store';
import { ThankYouPage } from '../ThankYouPage/ThankYouPage';

export const Cart: React.FC = memo(() => {
  const [phonesToCart, setPhonesToCart] = useState<Phone[]>([]);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const totalCount = useSelector((state: RootState) => state.counter.cartValue);
  const dispatch = useDispatch();

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

    const storageArray: string[] = getLocalStorageData(StorageKeys.CART);

    const updatedPhones = phonesToCart.filter(phone => phone.id !== id);

    setPhonesToCart(updatedPhones);
    dispatch(setCartValue(storageArray.length));
  };

  const deleteAllProduct = () => {
    deleteAllLocalFromCart();
    setPhonesToCart([]);
    setTotal(0);
    setModalIsOpen(true);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 2500);
    dispatch(setCartValue(0));
  };

  return (
    <div className="cart">
      <Link to="/phones" className="navBack">
        <img className="navBack__elementBack" src={elementBack} alt="elementBack" />
        <div className="navBack__text">Back</div>
      </Link>

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

        {!modalIsOpen && totalCount === 0 && (
          <div className="total">
            <div className="total__price">{total}</div>
            <div className="total__title">
              {`Total for ${totalCount} ${phonesToCart.length === 1 ? 'item' : 'items'}`}
            </div>
            <div className="total__checkout">
              <button
                className="total__checkout__but"
                type="button"
                onClick={() => deleteAllProduct()}
                disabled
              >
                Checkout
              </button>
            </div>
          </div>
        )}

        {!modalIsOpen && totalCount !== 0 && (
          <div className="total">
            <div className="total__price">{total}</div>
            <div className="total__title">
              {`Total for ${totalCount} ${phonesToCart.length === 1 ? 'item' : 'items'}`}
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
        )}
      </div>

      {modalIsOpen && (
        <ThankYouPage setModalIsOpen={setModalIsOpen} />
      )}
    </div>
  );
});

import React, { memo } from 'react';
import elementBack from './imgCart/elemBack.svg';
import deleteButton from './imgCart/icon_close.svg';
import imageIphone from './imgCart/imgIphone.png';
import buttonMinus from './imgCart/button-.svg';
import buttonPlus from './imgCart/button+.svg';
import './CartPage.scss';

export const Cart: React.FC = memo(() => {
  return (
    <div className="cart">
      <div className="navBack">
        <img className="navBack__elementBack" src={elementBack} alt="elementBack" />
        <div className="navBack__text">Back</div>
      </div>

      <div className="title">Cart</div>

      <div className="order">
        <div className="goods">
          <div className="product">
            <div className="product__info">
              <img
                src={deleteButton}
                alt="deleteButton"
              />

              <img
                src={imageIphone}
                alt="imageIphone"
              />

              <div
                className="product__info__title"
              >
                Apple iPhone 14 Plus 128GB PRODUCT RED
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

              <div className="product__counting__price">$999</div>
            </div>
          </div>
          <div className="product">
            <div className="product__info">
              <img
                src={deleteButton}
                alt="deleteButton"
              />

              <img
                src={imageIphone}
                alt="imageIphone"
              />

              <div
                className="product__info__title"
              >
                Apple iPhone 14 Plus 128GB PRODUCT RED
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

              <div className="product__counting__price">$999</div>
            </div>
          </div>
          <div className="product">
            <div className="product__info">
              <img
                src={deleteButton}
                alt="deleteButton"
              />

              <img
                src={imageIphone}
                alt="imageIphone"
              />

              <div
                className="product__info__title"
              >
                Apple iPhone 14 Plus 128GB PRODUCT RED
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

              <div className="product__counting__price">$999</div>
            </div>
          </div>
        </div>

        <div className="total">
          <div className="total__price">$2657</div>
          <div className="total__title">Total for 3 items</div>
          <div className="total__checkout">
            <button className="total__checkout__but" type="button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
});

import React, { memo, useState } from 'react';
import './ItemPage.scss';
import cn from 'classnames';

import phone from '../../../data/phones/apple-iphone-11-128gb-black.json';
import { ColorSelector } from '../../ColorSelector/ColorSelector';
import { TechSpecs } from '../../TechSpecs/TechSpecs';
import { AboutPhone } from '../../AboutPhone/AboutPhone';
import heart from '../../../styles/images/heart.svg';
import { Breadcrump } from '../../Breadcrump/Breadcrump';

export const ItemPage: React.FC = memo(() => {
  const [currentCapacity, setCurrentCapacity] = useState('64 GB');

  const phoneColors: React.CSSProperties[] = [
    { background: '#FCDBC1' },
    { background: '#5F7170' },
    { background: '#4C4C4C' },
    { background: '#F0F0F0' },
  ];

  return (
    <>
      <div className="container">
        <Breadcrump pageName="Phones" productName={phone.name} />

        <h1 className="ItemPage__title">{phone.name}</h1>

        <div className="grid grid--tablet grid--desktop">
          <div className="
            grid__item--desktop-15-20
            grid__item--tablet-8-12
            grid__item--tablet-1-4"
          >
            <div className="ItemPage__interact-sect">
              <div className="ItemPage__sect">
                <div>
                  <div className="ItemPage__title-block">
                    <h2 className="ItemPage__sect-title">Available colors</h2>
                    {/* <h2 className="ItemPage__phone-id">ID: 802390</h2> */}
                  </div>

                  <div
                    className="ItemPage__selector"
                  >
                    {phoneColors.map((color) => (
                      <ColorSelector color={color} key={phoneColors.indexOf(color)} />
                    ))}
                  </div>
                  <div className="ItemPage__line" />
                </div>

                <div>
                  <div className="ItemPage__title-block">
                    <h2 className="ItemPage__sect-title">Select capacity</h2>
                  </div>

                  <div
                    className="ItemPage__selector"
                  >
                    <button
                      type="button"
                      className={cn(
                        'ItemPage__capacity-btn',
                        {
                          'ItemPage__capacity-btn--is-active': currentCapacity === '64 GB',
                        },
                      )}
                      onClick={() => setCurrentCapacity('64 GB')}
                    >
                      64 GB
                    </button>

                    <button
                      type="button"
                      className={cn(
                        'ItemPage__capacity-btn',
                        {
                          'ItemPage__capacity-btn--is-active': currentCapacity === '256 GB',
                        },
                      )}
                      onClick={() => setCurrentCapacity('256 GB')}
                    >
                      256 GB
                    </button>

                    <button
                      type="button"
                      className={cn(
                        'ItemPage__capacity-btn',
                        {
                          'ItemPage__capacity-btn--is-active': currentCapacity === '512 GB',
                        },
                      )}
                      onClick={() => setCurrentCapacity('512 GB')}
                    >
                      512 GB
                    </button>
                  </div>

                  <div className="ItemPage__line" />
                </div>
              </div>

              <div className="ItemPage__sect">
                <div className="ItemPage__price">
                  {phone.priceDiscount && (
                    <p className="ItemPage__price--reg">
                      {phone.priceDiscount}
                    </p>
                  )}

                  <p
                    className={phone.priceDiscount ? 'ItemPage__price--disc' : 'ItemPage__price--reg'}
                  >
                    {phone.priceRegular}
                  </p>
                </div>

                <div className="ItemPage__order">
                  <a
                    href="/"
                    className="card__button card__button--big"
                  >
                    Add to cart
                  </a>

                  <button
                    type="button"
                    className="card__add-to-favorite card__add-to-favorite--big"
                  >
                    <img src={heart} alt="favorite" />
                  </button>
                </div>
              </div>

              <div className="ItemPage__char">
                <div className="ItemPage__char-sect">
                  <p className="ItemPage__textChar">Screen</p>
                  <p className="ItemPage__textValue">
                    {phone.screen}
                  </p>
                </div>

                <div className="ItemPage__char-sect">
                  <p className="ItemPage__textChar">Resolution</p>
                  <p className="ItemPage__textValue">
                    {phone.resolution}
                  </p>
                </div>

                <div className="ItemPage__char-sect">
                  <p className="ItemPage__textChar">Processor</p>
                  <p className="ItemPage__textValue">
                    {phone.processor}
                  </p>
                </div>

                <div className="ItemPage__char-sect">
                  <p className="ItemPage__textChar">RAM</p>
                  <p className="ItemPage__textValue">
                    {phone.ram}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid--tablet grid--desktop">
          <div className="
            grid__item--desktop-1-13
            grid__item--tablet-1-12
            grid__item--tablet-1-4"
          >
            <AboutPhone />
          </div>

          <div className="
            grid__item--desktop-15-24
            grid__item--tablet-1-12
            grid__item--tablet-1-4"
          >
            <TechSpecs product={phone} />
          </div>
        </div>
      </div>
    </>
  );
});
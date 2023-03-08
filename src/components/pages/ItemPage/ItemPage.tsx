import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { getPhoneById } from '../../../api/phones';
import { PhonesResponse } from '../../../types/PhonesResponse';
import { Breadcrump } from '../../Breadcrump/Breadcrump';

import './SliderStyle.scss';
import './ItemPage.scss';

import heart from '../../../styles/images/heart.svg';
import { AboutPhone } from '../../AboutPhone/AboutPhone';
import { TechSpecs } from '../../TechSpecs/TechSpecs';

export const ItemPage: React.FC = memo(() => {
  const { phoneSlug } = useParams();

  const [currentItem, setCurrentItem] = useState<PhonesResponse | null>(null);
  const [currentCapacity, setCurrentCapacity] = useState('64 GB');

  const loadPhone = async () => {
    try {
      if (phoneSlug) {
        const res = await getPhoneById(phoneSlug);

        setCurrentItem(res);
      }
    } catch {
      setCurrentItem(null);
    }
  };

  useEffect(() => {
    loadPhone();
  }, []);

  return (
    <>
      {currentItem && (
        <div className="container">
          <Breadcrump pageName="Phones" productName={currentItem.name} />

          <h1 className="ItemPage__title">{currentItem.name}</h1>

          <div className="grid grid--tablet grid--desktop">
            <div className="
              grid__item--desktop-1-13
              grid__item--tablet-1-6"
            >

              {/* <Slider
              {...settings}
            >
              <img src={imgPath + currentItem.images[0]} alt="" className="phone__small-img" />
              <img src={imgPath + currentItem.images[1]} alt="" className="phone__small-img" />
              <img src={imgPath + currentItem.images[2]} alt="" className="phone__small-img" />
              <img src={imgPath + currentItem.images[3]} alt="" className="phone__small-img" />
              <img src={imgPath + currentItem.images[4]} alt="" className="phone__small-img" />
            </Slider> */}
            </div>

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
                    {/*
                  <div
                    className="ItemPage__selector"
                  >
                    {phoneColors.map((color) => (
                      <ColorSelector color={color} key={phoneColors.indexOf(color)} />
                    ))}
                  </div> */}
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
                    {currentItem.priceDiscount && (
                      <p className="ItemPage__price--reg">
                        {currentItem.priceDiscount}
                      </p>
                    )}

                    <p
                      className={currentItem.priceDiscount ? 'ItemPage__price--disc' : 'ItemPage__price--reg'}
                    >
                      {currentItem.priceRegular}
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
                      {currentItem.screen}
                    </p>
                  </div>

                  <div className="ItemPage__char-sect">
                    <p className="ItemPage__textChar">Resolution</p>
                    <p className="ItemPage__textValue">
                      {currentItem.resolution}
                    </p>
                  </div>

                  <div className="ItemPage__char-sect">
                    <p className="ItemPage__textChar">Processor</p>
                    <p className="ItemPage__textValue">
                      {currentItem.processor}
                    </p>
                  </div>

                  <div className="ItemPage__char-sect">
                    <p className="ItemPage__textChar">RAM</p>
                    <p className="ItemPage__textValue">
                      {currentItem.ram}
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
              <TechSpecs product={currentItem} />
            </div>
          </div>

          {/* <PhonesList
            title="You may also like"
            phones={newPhones}
          /> */}
        </div>
      )}
    </>
  );
});

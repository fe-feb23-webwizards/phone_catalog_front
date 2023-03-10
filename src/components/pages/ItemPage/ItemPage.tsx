import React, { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { getPhoneById } from '../../../api/phones';
import { PhoneFromAPI } from '../../../types/PhoneFromAPI';
import { Breadcrump } from '../../Breadcrumbs/Breadcrumbs';

import './SliderStyle.scss';
import './ItemPage.scss';
import heartActive from '../../../styles/images/heart-active.svg';

import heart from '../../../styles/images/heart.svg';
import { AboutPhone } from '../../AboutPhone/AboutPhone';
import { TechSpecs } from '../../TechSpecs/TechSpecs';
import { ColorSelector } from '../../ColorSelector/ColorSelector';
import { CapacitySelector } from '../../CapacitySelector/CapacitySelector';
import {
  addToLocalStorage, deleteFromLocalStorage, getLocalStorageData, StorageKeys,
} from '../../../hooks/useLocalStorage';
import {
  decrementCart,
  incrementCart,
  incrementFavourites,
  decrementFavourites,
  setFavouritesValue,
} from '../../Header/headerSlice.slice';
// import { Phone } from '../../../types/Phone';
// import { PhonesList } from '../../PhonesList/PhonesList';
// import { Phone } from '../../../types/Phone';

export const ItemPage: React.FC = memo(() => {
  const { phoneSlug } = useParams();

  const [currentItem, setCurrentItem] = useState<PhoneFromAPI>();
  const [currentCapacity, setCurrentCapacity] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [images, setImages] = useState<string[]>([]);
  // const [relevantProducts, setRelevantProducts] = useState<Phone[]>([]);

  const [isAdded, setIsAdded] = useState(false);
  const [isFavourites, setIsFavourites] = useState(false);
  const [id, setId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const phonesToCart = getLocalStorageData(StorageKeys.CART);
  const phonesToFavourites = getLocalStorageData(StorageKeys.FAVOURITES);

  const loadPhone = async () => {
    try {
    if (phoneSlug) {
      const res = await getPhoneById(phoneSlug);
      // const allPhones = await getAllPhones();
      // // const relevantPhones;

      // // if (res.price) {
      // //   relevantPhones = allPhones.filter(item => (
      // //     item.price <= res.priceDiscount + 100) && (item.price >= res.priceDiscount - 100));
      // // } else {
      // const relevantPhones = allPhones.filter(item => (
      //   item.price <= res.priceDiscount + 100) && (item.price >= res.priceDiscount - 100));
      // // }

      // setRelevantProducts(relevantPhones);

      const isInCart = phonesToCart.includes(res.id);
      const isInFavourites = phonesToFavourites.includes(res.id);

      setCurrentItem(res);
      setId(res.id);
      setImages(res.images);
      setCurrentCapacity(res.capacity);
      setCurrentColor(res.color);

      setIsAdded(isInCart);
      setIsFavourites(isInFavourites);
      }
    } catch {
      setCurrentItem(null);
      navigate('/notFound');
    }
  };

  useEffect(() => {
    loadPhone();
  }, [phoneSlug]);

  const settings = {
    customPaging(i: number) {
      return (
        <img src={images[i]} alt="img" className="slick-image" />
      );
    },
    dots: true,
    dotsClass: 'slick-dots-for-small-img',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

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

              <Slider
                {...settings}
              >
                {currentItem.images.map(image => (
                  <img src={image} alt="" className="phone__small-img" key={currentItem.id} />
                ))}
              </Slider>
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

                    <div
                      className="ItemPage__selector"
                    >
                      {currentItem.colorsAvailable.map((color) => {
                        let col = color;

                        if (color === 'spacegray') {
                          col = '#343d46';
                        }

                        if (color === 'midnightgreen') {
                          col = '#004953';
                        }

                        return (
                          <ColorSelector
                            colorName={color}
                            color={col}
                            currentColor={currentColor}
                            key={color}
                            phoneImage={currentItem.images[0]}
                            currentCapacity={currentCapacity}
                          />
                        );
                      })}
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
                      {currentItem.capacityAvailable.map((capacity) => (
                        <CapacitySelector
                          key={capacity}
                          capacity={capacity}
                          phoneImage={currentItem.images[0]}
                          currentCapacity={currentCapacity}
                          currentColor={currentColor}
                        />
                      ))}
                    </div>

                    <div className="ItemPage__line" />
                  </div>
                </div>
                <div className="ItemPage__sect">
                  <div className="ItemPage__price">
                    {currentItem.priceDiscount && (
                      <p className="ItemPage__price--reg">
                        {`${currentItem.priceDiscount}$`}
                      </p>
                    )}

                    <p
                      className={currentItem.priceDiscount ? 'ItemPage__price--disc' : 'ItemPage__price--reg'}
                    >
                      {`${currentItem.priceRegular}$`}
                    </p>
                  </div>

                  <div className="ItemPage__order">
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
            phones={relevantProducts}
          /> */}
        </div>
      )}
    </>
  );
});

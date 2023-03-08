import React, {
  memo,
} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import banner_1 from './banner-desktop.jpeg';
import banner_2 from '../../data/img/banner-phones.png';
import banner_3 from '../../data/img/banner-tablets.png';

import './TopSlider.scss';
import '../../styles/_blocks/_gridTemplate.scss';

export const TopSlider: React.FC = memo(() => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="slider">
      <div className="slider__container">
        <div className="grid grid--tablet grid--desktop">
          <h1 className="slider__title grid__item grid__item--tablet-1-9 grid__item--desktop-1-24">Welcome to Nice Gadgets store!</h1>

          <Slider
            className="grid__item grid__item--tablet-2-11 grid__item--desktop-2-23"
            {...settings}
          >
            <img
              className="slider__image"
              src={banner_1}
              alt="banner for slider"
            />

            <img
              className="slider__image"
              src={banner_2}
              alt="banner for slider"
            />

            <img
              className="slider__image"
              src={banner_3}
              alt="banner for slider"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
});

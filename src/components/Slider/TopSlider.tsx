import React, {
  memo,
} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import banner from './banner-desktop.jpeg';

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
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
        }}
      />
    ),
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
        <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>

        <Slider
          className="grid__item"
          {...settings}
        >
          <img
            className="slider__image"
            src={banner}
            alt="banner for slider"
          />

          <img
            className="slider__image"
            src={banner}
            alt="banner for slider"
          />

          <img
            className="slider__image"
            src={banner}
            alt="banner for slider"
          />
        </Slider>
      </div>
    </section>
  );
});

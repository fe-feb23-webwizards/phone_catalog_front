import React, { memo } from 'react';
import './Slider.scss';
import banner from './banner-desktop.jpeg';

export const Slider: React.FC = memo(() => (
  <>
    <h1 className="title">Welcome to Nice Gadgets store!</h1>

    <div className="slider-container">
      <div className="slider-controls">
        {' '}
        {/* eslint-disable-next-line react/button-has-type,jsx-a11y/control-has-associated-label */}
        <button className="slider-control slider-control-left"></button>
        <div className="slider-wrapper">
          <img className="slider-image" src={banner} alt="banner 1" />
        </div>
        {/* eslint-disable-next-line react/button-has-type,jsx-a11y/control-has-associated-label */}
        <button className="slider-control slider-control-right"></button>
      </div>
      <div className="slider-indicators">
        {' '}
        <div className="slider-indicator slider-indicator-active"></div>
        <div className="slider-indicator"></div>
        {' '}
        <div className="slider-indicator"></div>
      </div>
    </div>
  </>
));

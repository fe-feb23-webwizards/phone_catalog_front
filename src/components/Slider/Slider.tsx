import React, {
  memo, useState, useCallback,
} from 'react';
// import banner1 from './banner-desktop-1.jpeg';
import banner2 from './banner-desktop-2.jpeg';
import banner3 from './banner-desktop-3.jpeg';
import './Slider.scss';

const slides = [
  { id: 'banner-1', image: banner2 },
  { id: 'banner-2', image: banner2 },
  { id: 'banner-3', image: banner3 },
];

export const Slider: React.FC = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, [currentSlide]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide]);

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  return (
    <section className="slider">
      <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>

      <div className="slider-container">
        <div className="slider-controls">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            className="slider-control slider-control-left"
            onClick={handlePrevSlide}
            type="button"
          />

          <div className="slider-wrapper" style={slideStyle}>
            {slides.map((slide, index) => (
              <div
                className={`slider-item ${index === currentSlide ? 'slider-item-visible' : 'slider-item-hidden'}`}
                key={slide.id}
              >
                <img className="slider-image" src={slide.image} alt={`banner ${slide.id}`} />
              </div>
            ))}
          </div>

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            className="slider-control slider-control-right"
            onClick={handleNextSlide}
            type="button"
          />
        </div>

        <div className="slider-indicators">
          {slides.map(({ id }, index) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={id}
              className={`slider-indicator ${
                index === currentSlide ? 'slider-indicator-active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

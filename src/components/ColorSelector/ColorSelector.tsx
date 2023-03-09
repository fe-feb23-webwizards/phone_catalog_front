import './ColorSelector.scss';
import React, { memo } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = {
  phoneImage: string;
  colorName: string;
  color: string,
  currentColor: string;
  currentCapacity: string;
};

export const ColorSelector: React.FC<Props> = memo((
  {
    color, currentColor, phoneImage, currentCapacity, colorName,
  },
) => {
  const navigate = useNavigate();

  const routeChange = (colorToFind: string) => {
    const basePhone = phoneImage.split('/')[8];

    navigate(`/phones/${basePhone}-${currentCapacity.toLowerCase()}-${colorToFind}`);
  };

  return (
    <button
      type="button"
      className={cn(
        'color-selector',
        {
          'color-selector--is-active': colorName === currentColor,
        },
      )}
      onClick={() => routeChange(colorName)}
    >
      <div
        className="color-selector__color"
        style={{ backgroundColor: color }}
      />
    </button>
  );
});

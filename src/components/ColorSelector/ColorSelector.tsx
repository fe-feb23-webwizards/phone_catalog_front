import './ColorSelector.scss';
import React from 'react';

type Props = {
  color: string,
};

export const ColorSelector: React.FC<Props> = ({ color }) => {
  // if (color === 'spacegray') {
  //   color = '#4f5b66';
  // }

  return (
    <button type="button" className="color-selector">
      <div
        className="color-selector__color"
        style={{ backgroundColor: color }}
      />
    </button>
  );
};

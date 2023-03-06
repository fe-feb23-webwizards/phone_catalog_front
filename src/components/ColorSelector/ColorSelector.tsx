import './ColorSelector.scss';
import React from 'react';

type Props = {
  color: React.CSSProperties,
};

export const ColorSelector: React.FC<Props> = ({ color }) => {
  return (
    <button type="button" className="color-selector">
      <div className="color-selector__color" style={color} />
    </button>
  );
};

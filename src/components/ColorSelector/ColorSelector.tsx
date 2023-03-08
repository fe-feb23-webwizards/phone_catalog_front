import './ColorSelector.scss';
import React, { memo } from 'react';
import cn from 'classnames';

type Props = {
  color: string,
  currentColor: string;
  setColor: (col: string) => void;
};

export const ColorSelector: React.FC<Props> = memo(({ color, currentColor, setColor }) => {
  return (
    <button
      type="button"
      className={cn(
        'color-selector',
        {
          'color-selector--is-active': color === currentColor,
        },
      )}
      onClick={() => setColor(color)}
    >
      <div
        className="color-selector__color"
        style={{ backgroundColor: color }}
      />
    </button>
  );
});

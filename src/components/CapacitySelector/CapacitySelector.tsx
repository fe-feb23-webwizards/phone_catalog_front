import React, { memo } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = {
  phoneImage: string;
  capacity: string;
  currentCapacity: string;
  currentColor: string;
};

export const CapacitySelector: React.FC<Props> = memo((
  {
    capacity, currentCapacity, phoneImage, currentColor,
  },
) => {
  const navigate = useNavigate();

  const routeChange = (memoryToFind: string) => {
    const basePhone = phoneImage.split('/')[8];

    navigate(`/phones/${basePhone}-${memoryToFind.toLowerCase()}-${currentColor}`);
  };

  return (
    <button
      type="button"
      className={cn(
        'ItemPage__capacity-btn',
        {
          'ItemPage__capacity-btn--is-active': capacity === currentCapacity,
        },
      )}
      onClick={() => routeChange(capacity)}
    >
      {capacity}
    </button>
  );
});

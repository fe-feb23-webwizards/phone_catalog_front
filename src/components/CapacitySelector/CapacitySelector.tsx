import React, { memo } from 'react';
import cn from 'classnames';

type Props = {
  capacity: string;
  currentCapacity: string;
  setCapacity: (memory: string) => void;
};

export const CapacitySelector: React.FC<Props> = memo((
  { capacity, currentCapacity, setCapacity },
) => {
  return (
    <button
      type="button"
      className={cn(
        'ItemPage__capacity-btn',
        {
          'ItemPage__capacity-btn--is-active': capacity === currentCapacity,
        },
      )}
      onClick={() => setCapacity(capacity)}
    >
      {capacity}
    </button>
  );
});

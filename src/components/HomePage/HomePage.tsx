import React, { memo } from 'react';
import { NewModelsList } from '../NewModelsList/NewModelsList';
import { Slider } from '../Slider/Slider';

export const HomePage: React.FC = memo(() => (
  <>
    <Slider />
    <NewModelsList />
  </>
));

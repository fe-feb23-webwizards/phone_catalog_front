import React, { memo } from 'react';
import { PhonesList } from '../PhonesList/PhonesList';
import { Slider } from '../Slider/Slider';
import phones from '../../data/phones.json';

const newPhones = phones.filter(el => el.year > 2018);
const phonesWithDiscount = phones.filter(el => el.fullPrice - el.price > 50)
  .sort((a, b) => a.price - b.price);

export const HomePage: React.FC = memo(() => (
  <>
    <Slider />
    <PhonesList
      title="Brand new models"
      phones={newPhones}
    />
    <PhonesList
      title="Hot prices"
      phones={phonesWithDiscount}
    />
  </>
));

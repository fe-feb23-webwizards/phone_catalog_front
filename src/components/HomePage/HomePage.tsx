import React, { memo } from 'react';
import { PhonesList } from '../PhonesList/PhonesList';
import { Slider } from '../Slider/Slider';
import { phonesAPI } from '../../utils/phonesFromAPI'

const newPhones = phonesAPI.filter(el => el.year > 2018);
const phonesWithDiscount = phonesAPI.filter(el => el.fullPrice - el.price > 50)
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

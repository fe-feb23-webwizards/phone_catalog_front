import React, { memo } from 'react';
import { PhonesList } from '../PhonesList/PhonesList';
import { TopSlider } from '../Slider/TopSlider';
import { phonesAPI } from '../../utils/phonesFromAPI';
import { Categories } from '../Categories/Categories';

const newPhones = phonesAPI.filter(el => el.year > 2018);
const phonesWithDiscount = phonesAPI.filter(el => el.fullPrice - el.price > 50)
  .sort((a, b) => a.price - b.price);
const phonesCount = phonesAPI.length;

export const HomePage: React.FC = memo(() => (
  <>
    <TopSlider />
    <PhonesList
      title="Brand new models"
      phones={newPhones}
    />
    <Categories
      phones={phonesCount}
      tablets={24}
      accessories={100}
    />
    <PhonesList
      title="Hot prices"
      phones={phonesWithDiscount}
    />
  </>
));

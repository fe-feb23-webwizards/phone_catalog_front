import React, { memo } from 'react';
import { PhonesList } from '../../PhonesList/PhonesList';
import { TopSlider } from '../../Slider/TopSlider';
import { phonesAPI } from '../../../utils/phonesFromAPI';
import { ShopByCategory } from '../../Categories/ShopByCategory/ShopByCategory';

const newPhones = phonesAPI.filter(el => el.year > 2018);
const phonesWithDiscount = phonesAPI.filter(el => el.fullPrice - el.price > 50)
  .sort((a, b) => a.price - b.price);

export const HomePage: React.FC = memo(() => (
  <>
    <TopSlider />
    <PhonesList
      title="Brand new models"
      phones={newPhones}
    />
    <ShopByCategory />
    <PhonesList
      title="Hot prices"
      phones={phonesWithDiscount}
    />
  </>
));

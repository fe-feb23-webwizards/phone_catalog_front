import React, { memo, useEffect, useState } from 'react';
import { PhonesList } from '../../PhonesList/PhonesList';
import { TopSlider } from '../../Slider/TopSlider';
import { ShopByCategory } from '../../Categories/ShopByCategory/ShopByCategory';
import { PhoneFromAPI } from '../../../types/PhoneFromAPI';
import { getPhones } from '../../../api/phones';

export const HomePage: React.FC = memo(() => {
  const [phones, setPhones] = useState<PhoneFromAPI[]>([]);

  const newPhones = phones.filter(el => el.name.includes('11') && el.priceRegular - el.priceDiscount < 60).sort((a, b) => b.priceRegular - a.priceRegular);
  const phonesWithDiscount = phones.filter(el => el.priceRegular - el.priceDiscount > 70)
    .sort((a, b) => a.priceRegular - b.priceRegular);

  console.log(phonesWithDiscount);

  useEffect(() => {
    try {
      getPhones(1, 71)
        .then(setPhones);
    } catch (error) {
      setPhones([]);
    }
  }, []);

  return (
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
  );
});

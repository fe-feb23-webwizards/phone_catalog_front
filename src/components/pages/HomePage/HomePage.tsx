import React, { memo, useEffect, useState } from 'react';
import { PhonesList } from '../../PhonesList/PhonesList';
import { TopSlider } from '../../Slider/TopSlider';
import { ShopByCategory } from '../../Categories/ShopByCategory/ShopByCategory';
import { getPhones } from '../../../api/phones';
import { Phone } from '../../../types/Phone';

export const HomePage: React.FC = memo(() => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const newPhones = phones.filter(el => el.price - el.fullPrice)
    .sort((a, b) => a.price - b.price);
  const phonesWithDiscount = phones.filter(el => el.price !== el.fullPrice)
    .sort((a, b) => a.price - b.price);

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

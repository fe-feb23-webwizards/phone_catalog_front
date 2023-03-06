import React, { memo, useEffect, useState } from 'react';
import { PhonesList } from '../../PhonesList/PhonesList';
import { TopSlider } from '../../Slider/TopSlider';
import { ShopByCategory } from '../../Categories/ShopByCategory/ShopByCategory';
import { PhoneFromAPI } from '../../../types/PhoneFromAPI';
import { getPhones } from '../../../api/phones';

export const HomePage: React.FC = memo(() => {
  const [newPhones, setNewPhones] = useState<PhoneFromAPI[]>([]);

  useEffect(() => {
    try {
      getPhones()
        .then(setNewPhones);
    } catch (error) {
      setNewPhones([]);
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
        phones={newPhones}
      />
    </>
  );
});

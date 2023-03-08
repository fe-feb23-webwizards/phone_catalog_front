import React, { memo, useEffect, useState } from 'react';
import { PhonesList } from '../../PhonesList/PhonesList';
import { TopSlider } from '../../Slider/TopSlider';
import { ShopByCategory } from '../../Categories/ShopByCategory/ShopByCategory';
import { getPhonesForSlider } from '../../../api/phones';
import { Phone } from '../../../types/Phone';

export const HomePage: React.FC = memo(() => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [cheapestPhones, setCheapestPhones] = useState<Phone[]>([]);

  useEffect(() => {
    try {
      getPhonesForSlider('newest')
        .then(setNewestPhones);
      getPhonesForSlider('cheapest')
        .then(setCheapestPhones);
    } catch (error) {
      setNewestPhones([]);
      setNewestPhones([]);
    }
  }, []);

  return (
    <>
      <TopSlider />
      <PhonesList
        title="Brand new models"
        phones={newestPhones}
      />
      <ShopByCategory />
      <PhonesList
        title="Hot prices"
        phones={cheapestPhones}
      />
    </>
  );
});

import React from 'react';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';

import Phones from '../imgForCategories/phones.png';
import Tablets from '../imgForCategories/tablets.png';
import Accessoires from '../imgForCategories/accessoires.png';

export const ShopByCategory: React.FC = () => {
  return (
    <section className="shop-by-category" id="shopByCategory">
      <div className="container">
        <h2 className="shop-by-category__title">Shop by category</h2>

        <div className="grid grid--tablet grid--desktop">
          <div
            className="
              shop-by-category__item
              grid__item
              grid__item--tablet-1-4
              grid__item--desktop-1-8"
          >
            <CategoriesItem
              imageUrl={Phones}
              imageAlt="Mobile phones category"
              categoryName="Mobile phones"
              numOfModels="95 models"
              categoryLink="#/phones"
            />
          </div>

          <div
            className="
              shop-by-category__item
              grid__item
              grid__item--tablet-5-8
              grid__item--desktop-9-16"
          >
            <CategoriesItem
              imageUrl={Tablets}
              imageAlt="Tablets category"
              categoryName="Tablets"
              numOfModels="24 models"
              categoryLink="#/tablets"
            />
          </div>

          <div
            className="
              shop-by-category__item
              grid__item
              grid__item--tablet-9-12
              grid__item--desktop-17-24"
          >
            <CategoriesItem
              imageUrl={Accessoires}
              imageAlt="Accessories category"
              categoryName="Accessories"
              numOfModels="100 models"
              categoryLink="#/accessories"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

import accesoriesPhoto from './imgForCategories/accessories.svg';
import phonesPhoto from './imgForCategories/phones.svg';
import tabletsPhoto from './imgForCategories/tablets.svg';
import './Categories.scss';

  type Prop = {
    phones: number;
    tablets: number;
    accessories: number;
  };

export const Categories: React.FC<Prop> = ({ phones, tablets, accessories }) => {
  // const history = useHistory();

  // const handleRedirect = (url: string) => {
  //   history.push({
  //     pathname: url,
  //   });
  // };

  const categories = [
    {
      name: 'Mobile phones',
      color: '#6D6474',
      imgUrl: phonesPhoto,
      items: phones,
      url: 'phones',

    }, {
      name: 'Tablets',
      color: '#8D8D92',
      imgUrl: tabletsPhoto,
      items: tablets,
      url: 'tablets',
    }, {
      name: 'Accessories',
      color: '#D53C51',
      imgUrl: accesoriesPhoto,
      items: accessories,
      url: 'accessories',
    }];

  return (
    <section className="section">
      <div className="container">
        <div className="container__top">
          <h2 className="container__title">Shop by category</h2>
        </div>
        <div className="Categories">
          <ul className="Categories__container" role="article">
            {categories.map(category => (
              <li
                role="presentation"
                key={category.name}
                // onClick={() => handleRedirect(category.url)}
                className="Categories__item"
              >
                <div
                  className="Categories__background"
                  style={{ backgroundColor: category.color }}
                >
                  <NavLink to={category.url}>
                    <img
                      className="Categories__img"
                      src={category.imgUrl}
                      alt={category.name}
                    />
                  </NavLink>
                </div>
                <h3 className="Categories__title">{category.name}</h3>
                <p className="Categories__items">{`${category.items} models`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

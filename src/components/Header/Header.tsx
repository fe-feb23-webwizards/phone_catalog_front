import React, { memo } from 'react';
import './Header.scss';
import logo from './imgForHeader/logo.svg';
import heart from './imgForHeader/heartFavourite.svg';
import bag from './imgForHeader/shoppingBag.svg';
import elementLogo from './imgForHeader/elemLogo.svg';
import { PageNavLink } from './PageNavLink';

export const Header: React.FC = memo(() => (
  <header className="header">
    <nav className="nav">
      <a href="/#" className="img__logo">
        <img src={logo} alt="logo" />
        <img className="img__logo__el" src={elementLogo} alt="logo" />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <PageNavLink to="/" text="Home" />
        </li>
        <li className="nav__item">
          <PageNavLink to="phones" text="Phones" />
        </li>
        <li className="nav__item">
          <PageNavLink to="tablets" text="Tablets" />
        </li>
        <li className="nav__item">
          <PageNavLink to="accessories" text="Accessories" />
        </li>
      </ul>
    </nav>
    <div className="user-nav">
      <ul className="user-nav__list">
        <PageNavLink
          to="favourites"
          text={(
            <li className="user-nav__item">
              <img src={heart} alt="favorites" />
            </li>
          )}
        />
        <PageNavLink
          to="cart"
          text={(
            <li className="user-nav__item">
              <img src={bag} alt="shopping bag" />
            </li>
          )}
        />
      </ul>
    </div>
  </header>
));

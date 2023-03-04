import React, { memo, useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './imgForHeader/logo.svg';
import heart from './imgForHeader/heartFavourite.svg';
import bag from './imgForHeader/shoppingBag.svg';
import menuOpen from './imgForHeader/menu_button-open.svg';
import menuClose from './imgForHeader/menu_button-close.svg';
import elementLogo from './imgForHeader/elemLogo.svg';
import { PageNavLink } from './PageNavLink';

const navLinkInfo = [
  { to: '/', text: 'Home' },
  { to: 'phones', text: 'Phones' },
  { to: 'tablets', text: 'Tablets' },
  { to: 'accessories', text: 'Accessories' },
];

const navLinkInfoUser = [
  {
    to: 'favourites',
    text: (
      <li className="navigation__user__item">
        <img src={heart} alt="favorites" />
      </li>
    ),
  },
  {
    to: 'cart',
    text: (
      <li className="navigation__user__item">
        <img src={bag} alt="shopping bag" />
      </li>
    ),
  },
];

export const Header: React.FC = memo(() => {
  const [isOpenMenu, setIsOpen] = useState(false);

  return (
    <header className={cn('header', { header__mobile: isOpenMenu })}>
      <nav className="nav">
        <div className="nav__link">
          <Link to="/#" className="nav__link--logo">
            <img src={logo} alt="logo" />
            <img className="nav__link--logo-el" src={elementLogo} alt="logo" />
          </Link>
          <div
            className="nav__link--menu nav__link--menu-open"
            onClick={() => setIsOpen(!isOpenMenu)}
            aria-hidden="true"
          >
            <img src={isOpenMenu ? menuClose : menuOpen} alt="menu-open" />
          </div>
        </div>
      </nav>

      <div className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
        <ul className="navigation__list">
          {navLinkInfo.map(el => (
            <li key={el.text} className="navigation__item">
              <PageNavLink to={el.to} text={el.text} setIsOpen={setIsOpen} />
            </li>
          ))}
        </ul>

        <div className="navigation__user">
          <ul className="navigation__user__list">
            {navLinkInfoUser.map(el => (
              <React.Fragment key={el.to}>
                <PageNavLink
                  to={el.to}
                  text={el.text}
                  setIsOpen={setIsOpen}
                />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
});

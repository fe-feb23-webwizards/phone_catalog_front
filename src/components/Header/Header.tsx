import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import type { RootState } from '../../store';
import { setCartValue, setFavouritesValue } from './headerSlice.slice';
import logo from './imgForHeader/logo.svg';
import heart from './imgForHeader/heartFavourite.svg';
import bag from './imgForHeader/shoppingBag.svg';
import menuOpen from './imgForHeader/menu_button-open.svg';
import menuClose from './imgForHeader/menu_button-close.svg';
import elementLogo from './imgForHeader/elemLogo.svg';
import { PageNavLink } from './PageNavLink';
import {
  getLocalStorageData,
  StorageKeys,
} from '../../hooks/useLocalStorage';

const navLinkInfo = [
  { to: '/', text: 'Home' },
  { to: 'phones', text: 'Phones' },
  { to: 'tablets', text: 'Tablets' },
  { to: 'accessories', text: 'Accessories' },
];

export const Header: React.FC = memo(() => {
  const [isOpenMenu, setIsOpen] = useState(false);

  const countingCart = useSelector((state: RootState) => state.counter.cartValue);
  const countingFavourites = useSelector((state: RootState) => state.counter.favouritesValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageCart: string[] = getLocalStorageData(StorageKeys.CART);
    const storageFavourites: string[] = getLocalStorageData(StorageKeys.FAVOURITES);

    dispatch(setCartValue(storageCart.length));

    dispatch(setFavouritesValue(storageFavourites.length));
  }, []);

  return (
    <header className={cn('header', { header__mobile: isOpenMenu })}>
      <div className="nav">
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
      </div>

      <nav className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
        <ul className="navigation__list">
          {navLinkInfo.map(el => (
            <li key={el.text} className="navigation__item">
              <PageNavLink to={el.to} text={el.text} setIsOpen={setIsOpen} />
            </li>
          ))}
        </ul>

        <div className="navigation__user">
          <ul className="navigation__user__list">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="favourites"
              className={({ isActive }) => cn('link__icon', {
                'is-active': isActive,
              })}
            >
              <li className="navigation__user__item cartNav">
                {countingFavourites > 0 && (
                  <span className="count__cart__prod">
                    {countingFavourites}
                  </span>
                )}
                <img src={heart} alt="favorites" />
              </li>
            </NavLink>

            <NavLink
              onClick={() => setIsOpen(false)}
              to="cart"
              className={({ isActive }) => cn('link__icon', {
                'is-active': isActive,
              })}
            >
              <li className="navigation__user__item cartNav">
                {countingCart > 0 && <span className="count__cart__prod">{countingCart}</span>}
                <img src={bag} alt="shopping bag" />
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
});

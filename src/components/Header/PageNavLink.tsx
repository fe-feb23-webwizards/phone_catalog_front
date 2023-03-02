import React, { memo, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string,
  text: string | ReactNode,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export const PageNavLink: React.FC<Props> = memo(({ to, text, setIsOpen }) => {
  return (
    <NavLink
      onClick={() => setIsOpen(false)}
      to={to}
      className={({ isActive }) => cn(typeof text === 'string' ? 'link__item' : 'link__icon', {
        'is-active': isActive,
      })}
    >
      {text}
    </NavLink>
  );
});

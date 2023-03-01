import React, { memo, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string,
  text: string | ReactNode,
};

export const PageNavLink: React.FC<Props> = memo(({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('link__item', {
        'is-active': isActive,
      })}
    >
      {text}
    </NavLink>
  );
});
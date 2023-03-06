import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrump.scss';

type Props = {
  pageName: string,
  productName?: string,
};

export const Breadcrump: React.FC<Props> = ({ pageName, productName }) => {
  return (
    <div className="back-block">
      <Link to="/home" className="back-block__home">
        <div className="back-block__home--inside" />
      </Link>
      <div className="back-block__arrow"></div>
      <Link to={`/${pageName.toLocaleLowerCase()}`}>
        <p className="back-block__text">{pageName}</p>
      </Link>
      {productName && (
        <>
          <div className="back-block__arrow"></div>
          <p className="back-block__text">{productName}</p>
        </>
      )}
    </div>
  );
};

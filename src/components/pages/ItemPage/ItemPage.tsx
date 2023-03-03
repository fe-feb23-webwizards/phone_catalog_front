import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export const ItemPage: React.FC = memo(() => {
  // const [isLoading] = useState(false);

  return (
    <div className="container">
      <div className="back-block">
        <Link to="/home" className="back-block__home">
          <div className="back-block__home--inside" />
        </Link>
        <div className="back-block__arrow"></div>
        <p className="back-block__text">Favourites</p>
      </div>
    </div>
  );
});

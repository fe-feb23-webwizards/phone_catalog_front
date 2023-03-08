import React from 'react';
import './CategoriesItem.scss';

interface Props {
  imageUrl: string;
  imageAlt: string;
  categoryLink: string;
  categoryName: string;
  numOfModels: string;
}

export const CategoriesItem: React.FC<Props> = ({
  imageUrl,
  categoryName,
  categoryLink,
  imageAlt,
  numOfModels,
}) => {
  return (
    <div className="category">
      <a href={categoryLink}>
        <img src={imageUrl} alt={imageAlt} className="category__photo" />
      </a>

      <h4 className="category__name">
        <a href={categoryLink} className="category__link">
          {categoryName}
        </a>
      </h4>

      <p className="category__description">{`${numOfModels} models`}</p>
    </div>
  );
};

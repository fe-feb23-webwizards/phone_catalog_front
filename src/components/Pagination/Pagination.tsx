import React from 'react';
import './Pagination.scss';
import cn from 'classnames';

type Props = {
  cardsPerPage: number,
  totalCards: number,
  currentPage: number,
  changePage: (pageNumber: number) => void,
};

export const Pagination: React.FC<Props> = ({
  cardsPerPage, totalCards, currentPage, changePage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pag-container">
      <button
        type="button"
        className="pag-buttons pag-buttons__arrow pag-buttons__arrow--left"
        onClick={() => {
          changePage(currentPage > 1 ? currentPage - 1 : currentPage);
        }}
      >
      </button>

      <div className="pag-list">
        {pageNumbers.map(pageNumber => (
          <button
            type="button"
            key={pageNumber}
            className={cn(
              'pag-buttons pag-list__item pag-list__item--link ',
              {
                'is-active-pag': pageNumber === currentPage,
              },
            )}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="pag-buttons pag-buttons__arrow pag-buttons__arrow--right"
        onClick={() => {
          changePage(currentPage < totalPages ? currentPage + 1 : currentPage);
        }}
      >
      </button>
    </div>
  );
};

import React, { memo, useMemo, useState } from 'react';
// import { Link } from 'react-router-dom';
import './PhonesPage.scss';
import { PhoneCards } from '../PhoneCards/PhoneCards';
import { Pagination } from '../Pagination/Pagination';
import phones from '../../data/phones.json';
import { Phone } from '../../types/Phone';

export const PhonesPage: React.FC = memo(() => {
  const [sortBy, setSortBy] = useState('newest');

  const [cards] = useState<Phone[]>(phones);
  const [isLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(16);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const productsAmount = cards.length;

  const getSortedCards = useMemo(() => {
    return currentCards.sort((card1: Phone, card2: Phone) => {
      switch (sortBy) {
        case 'newest':
          return card2.year - card1.year;
        case 'alphabetically':
          return card1.phoneId.localeCompare(card2.phoneId);
        case 'cheapest':
          return card1.price - card2.price;
        default:
          return 0;
      }
    });
  }, [sortBy, cards, currentPage, cardsPerPage]);

  return (
    <div className="container">
      <h1 className="page-title">Mobile Phones</h1>
      <h2 className="products-amount">{`${productsAmount} models`}</h2>

      <div className="catalog-display">
        <div className="sorter">
          <div className="sorter__name">Sort by</div>
          <select
            className="sorter__selector sorter__selector--sort"
            onChange={(event) => {
              setSortBy(event.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="newest">Newest</option>
            <option value="alphabetically">Alphabetically</option>
            <option value="cheapest">Cheapest</option>
          </select>
        </div>

        <div className="sorter">
          <div className="sorter__name">Items on page</div>
          <select
            className="sorter__selector sorter__selector--per-page"
            onChange={(event) => {
              setCardsPerPage(+event.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="16">16</option>
            <option value="12">12</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      <PhoneCards
        cards={getSortedCards}
        isLoading={isLoading}
      />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        changePage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
});

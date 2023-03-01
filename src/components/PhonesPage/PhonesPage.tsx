import React, {
  memo, useState,
  /*
useEffect
*/ } from 'react';
import { PhoneCards } from '../PhoneCards/PhoneCards';
import { Pagination } from '../Pagination/Pagination';
import phones from './cardsTestApi.json';
import { Phone } from '../../types/Phone';

export const PhonesPage: React.FC = memo(() => {
  const [cards] = useState<Phone[]>(phones);
  const [isLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(16);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    // <h1>Phones Page</h1>
    <>
      {/* // <h1>Phones Page</h1> */}
      <PhoneCards
        cards={currentCards}
        isLoading={isLoading}
      />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        changePage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
});

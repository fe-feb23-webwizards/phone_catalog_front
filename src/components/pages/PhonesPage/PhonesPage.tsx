import React, {
  memo,
  useMemo,
  useState,
  useEffect,
} from 'react';
// import { Link } from 'react-router-dom';
import './PhonesPage.scss';
import { PhoneCards } from '../../PhoneCards/PhoneCards';
import { Pagination } from '../../Pagination/Pagination';
import { Phone } from '../../../types/Phone';
import { getPhones } from '../../../api/phones';
import { phonesAPI } from '../../../utils/phonesFromAPI';

export const PhonesPage: React.FC = memo(() => {
  const [sortBy, setSortBy] = useState('newest');
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(16);

  const showDiscount = true;

  useEffect(() => {
    setIsLoading(true);

    try {
      getPhones(1, 71)
        .then(res => {
          setPhones(res.data);
          setIsLoading(false);
        });
    } catch (error) {
      setPhones(phonesAPI);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = phones.slice(indexOfFirstCard, indexOfLastCard);

  const productsAmount = phones.length;

  const getSortedCards = useMemo(() => {
    return currentCards.sort((card1: PhoneFromAPI, card2: PhoneFromAPI) => {
      switch (sortBy) {
        case 'newest':
          return card2.priceRegular - card1.priceRegular;
        case 'alphabetically':
          return card1.id.localeCompare(card2.id);
        case 'cheapest':
          return card1.priceRegular - card2.priceRegular;
        default:
          return 0;
      }
    });
  }, [sortBy, phones, currentPage, cardsPerPage]);

  console.log(getSortedCards);

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

      {isLoading ? (
        <h1>is Loading</h1>
      ) : (
        <>
          <PhoneCards
            cards={currentCards}
            isLoading={isLoading}
            shouldShowDiscount={showDiscount}
          />
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={phones.length}
            changePage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
});

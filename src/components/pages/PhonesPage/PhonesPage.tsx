import React, {
  memo,
  useState,
  useEffect,
} from 'react';
// import { Link } from 'react-router-dom';
import './PhonesPage.scss';
import { PhoneCards } from '../../PhoneCards/PhoneCards';
import { Pagination } from '../../Pagination/Pagination';
import { Phone } from '../../../types/Phone';
import { phonesAPI } from '../../../utils/phonesFromAPI';
import { Loader } from '../../Loader/Loader';
import { getSortedPhones } from '../../../api/phones';
import { Breadcrump } from '../../Breadcrumbs/Breadcrumbs';

export const PhonesPage: React.FC = memo(() => {
  const [sortBy, setSortBy] = useState('newest');
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(16);

  const showDiscount = true;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = phones.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    try {
      getSortedPhones(1, 71, sortBy)
        .then(setPhones);
    } catch (error) {
      setPhones(phonesAPI);
    } finally {
      setIsLoading(false);
    }
  }, [sortBy]);

  const productsAmount = phones.length;

  return (
    <div className="container">
      <Breadcrump pageName="Phones" />

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

      {!phones.length ? (
        <>
          <Loader />
        </>
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

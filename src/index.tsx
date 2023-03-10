import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './components/pages/HomePage/HomePage';
import { PhonesPage } from './components/pages/PhonesPage/PhonesPage';
import { TabletsPage } from './components/pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/pages/AccessoriesPage/AccessoriesPage';
import { PageNotFound } from './components/pages/PageNotFound/PageNotFound';
import { Favourites } from './components/pages/FavouritesPage/FavouritesPages';
import { App } from './App';
import { Cart } from './components/pages/CartPage/CartPage';
import { ItemPage } from './components/pages/ItemPage/ItemPage';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones">
            <Route index element={<PhonesPage />} />
            <Route path=":phoneSlug" element={<ItemPage />} />
            <Route index element={<PhonesPage />} />
          </Route>
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/favourites">
            <Route index element={<Favourites />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route index element={<HomePage />} />
          <Route path="/notFound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/notFound" />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { HomePage } from './components/pages/HomePage/HomePage';
import { PhonesPage } from './components/pages/PhonesPage/PhonesPage';
import { TabletsPage } from './components/pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/pages/AccessoriesPage/AccessoriesPage';
import { PageNotFound } from './components/pages/PageNotFound/PageNotFound';
import { Favourites } from './components/pages/FavouritesPage/FavouritesPages';
import { App } from './App';
import { Cart } from './components/pages/CartPage/CartPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './index.scss';
import { HomePage } from './components/HomePage/HomePage';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { TabletsPage } from './components/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage/AccessoriesPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Favourites } from './components/Favourites/Favourites';
import { App } from './App';
import { Cart } from './components/Cart/Cart';

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

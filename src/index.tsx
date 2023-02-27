import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './index.scss';
import { HomePage } from './components/HomePage/HomePage';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { TabletsPage } from './components/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage/AccessoriesPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

import { App } from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/phones" element={<PhonesPage />} />

        <Route path="/tablets" element={<TabletsPage />} />

        <Route path="/accessories" element={<AccessoriesPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

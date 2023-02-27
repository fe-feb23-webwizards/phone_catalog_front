import React from 'react';
import './App.scss';
// import { Route, Routes } from 'react-router-dom';
// import { HomePage } from './components/HomePage/HomePage';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
// import { PhonesPage } from './components/PhonesPage/PhonesPage';
// import { TabletsPage } from './components/TabletsPage/TabletsPage';
// import { AccessoriesPage } from './components/AccessoriesPage/AccessoriesPage';
// import { PageNotFound } from './components/PageNotFound/PageNotFound';

// interface Props {
//   onClick: () => void;
// }

// export const Provider: React.FC<Props> = React.memo(
//   ({ onClick, children }) => (
//     <button
//       type="button"
//       onClick={onClick}
//     >
//       {children}

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

import React from 'react';
import './App.scss';
import { NewModelsList } from './components/NewModelsList/NewModelsList';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />

      <div className="starter">
        <NewModelsList />
      </div>
    </div>


  );
};

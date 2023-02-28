import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { NewModelsList } from './components/NewModelsList/NewModelsList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Slider } from './components/Slider/Slider';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />
      <Slider />
      <div className="starter">
        <NewModelsList />
      </div>

      <Footer />
    </div>

  );
};

import React from 'react';
import './App.scss';
import { NewModelsList } from './components/NewModelsList/NewModelsList';

export const App: React.FC = () => {
  return (
    <main className="container">
      <h1>Hello Web Wizards!!!</h1>
      <div className="starter">
        <NewModelsList />
      </div>
    </main>
  );
};

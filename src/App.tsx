// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Login from './components/Login/Login';
import useToken from './components/Login/useToken';

export const App: React.FC = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>

  );
};

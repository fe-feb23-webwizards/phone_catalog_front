/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import './Login.scss';

async function loginUser(credentials) {
  return fetch('https://gentle-springs-47615.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(data => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });

    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <div className="top">

      </div>
      <div className="bottom">

      </div>
      <div className="center">
        <h2>Please Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="email"
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
          <h2>&nbsp;</h2>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

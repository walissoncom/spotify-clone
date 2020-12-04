import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';

import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    const hash = getTokenFromUrl();

    window.location.hash = ""; // Clear the token from the URL

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;

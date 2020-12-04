import React, { useEffect, useState } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';

import './App.css';

// Creating a new instance of Spotify
// It will allow the application to communicate back and forth with Spotify
const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    const hash = getTokenFromUrl();

    window.location.hash = ""; // Clear the token from the URL

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('Person', user);
      })
    }
  }, [])

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

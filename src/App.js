import React, { useEffect, useState } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';

import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayerContext';
import Login from './components/Login/Login';
import Player from './components/Player/Player';

import './App.css';

// Creating a new instance of Spotify
// It will allow the application to communicate back and forth with Spotify
const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {

    const hash = getTokenFromUrl();

    window.location.hash = ""; // Clear the token from the URL

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      // Get user details
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import configureStore from './store/store.js';
import { Provider } from 'react-redux';
import newApp from './components/newApp.js';
import flux from 'fluxxor';
//

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <newApp />,
  document.getElementById('app')
);


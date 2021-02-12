import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
let initialStateObject = {currentVideo: exampleVideoData[0], videoList: exampleVideoData};
let configureStore = createStore(
  rootReducer,
  initialStateObject,
  applyMiddleware(thunk)
);

// // store = store();

export default configureStore;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Dispatcher from '../Dispatcher.js';
import { EventEmitter } from 'events';
import newCurrentVideo from '../actions/newCurrentVideo.js';
import newSearch from '../actions/newSearch.js';

const CHANGE_EVENT = 'change';
var video = {};

class changeVideoStore extends EventEmitter {
  addChangeListner(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  changeVideo() {
    return newSearch.video;
  }
}

const store = new changeVideoStore();

Dispatcher.register((action) => {
  switch (action.type) {
  case newCurrentVideo.type:
    video = action.video;
    store.emitChange();
    break;
  default:
  }
});

export default store;

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// let initialStateObject = {currentVideo: exampleVideoData[0], videoList: exampleVideoData};
// let configureStore = createStore(
//   rootReducer,
//   initialStateObject,

//   applyMiddleware(thunk)
// );

// // // store = store();

// export default configureStore;
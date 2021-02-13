import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Dispatcher from '../Dispatcher.js';
import { EventEmitter } from 'events';
import newVideoList from '../actions/newVideoList.js';
import newSearch from '../actions/newSearch.js';

const CHANGE_VIDEO_LIST = 'change';
var videos = [];

class changeVideoListStore extends EventEmitter {
  addChangeListner(callback) {
    this.on(CHANGE_VIDEO_LIST, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_VIDEO_LIST, callback);
  }

  emitChange() {
    this.emit(CHANGE_VIDEO_LIST);
  }

  changeVideoList() {
    return newSearch.videos;
  }
}

const store = new changeVideoListStore();

Dispatcher.register((action) => {
  switch (action.type) {
  case newVideoList.type:
    videos = action.videos;
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
import Redux from 'redux';
// import changeVideo from './currentVideo.js';

var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;

  default:
    return state;
  }
};

export default currentVideoReducer;

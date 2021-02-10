import Redux from 'redux';
// import changeVideo from './currentVideo.js';

var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    console.log('actionvideo', action.video);
    return action.video;

  default:
    return state;
  }
};

export default currentVideoReducer;

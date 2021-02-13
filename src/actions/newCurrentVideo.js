import Dispatcher from '../Dispatcher.js';
import currentVideo from './currentVideo.js';

var changeVideo = (video) => ({
  type: 'CHANGE_VIDEO',
  video: video,
});

export default changeVideo;
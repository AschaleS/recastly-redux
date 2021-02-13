import Dispatcher from '../Dispatcher.js';
import videoList from './videoList.js';

var changeVideoList = (videos) => ({
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;
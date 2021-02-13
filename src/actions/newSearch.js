import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Dispatcher from '../Dispatcher.js';


var handleVideoSearch = (q) => {

  return (Dispatcher) => {
    var option = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    searchYouTube (option, videos => {
      Dispatcher.dispatch(changeVideoList(videos)),
      handleVideoSearch.videoList = Dispatcher.dispatch(changeVideoList(videos));
      Dispatcher.dispatch(changeVideo(videos[0])),
      handleVideoSearch.video = Dispatcher.dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;

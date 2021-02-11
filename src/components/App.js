import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import configureStore from '../store/store.js';
import exampleVideoData from '../data/exampleVideoData.js';
//state plannned
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    configureStore.dispatch(changeVideo(exampleVideoData[0]));
    configureStore.dispatch(changeVideoList(exampleVideoData));
  }


  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

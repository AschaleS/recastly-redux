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
import changeVideoListStore from '../store/changeVideoListStore.js';
import changeVideoStore from '../store/changeVideoStore.js';

//state plannned
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    changeVideoStore.addChangeListner(changeVideoStore.changeVideo);
    changeVideoListStore.addChangeListner(changeVideoListStore.changeVideoList);
  }


  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <Search handleSearchInputChange={this.handleVideoSearch} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

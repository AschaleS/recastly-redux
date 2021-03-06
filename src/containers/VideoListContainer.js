import { connect } from 'react-redux';
import VideoList from '../components/VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import videoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state, ownProps) => {
  return {
    videos: state.videoList,

  };

};

var mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};



var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

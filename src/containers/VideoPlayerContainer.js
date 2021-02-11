import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import currentVideo from '../actions/currentVideo.js';

var mapStateToProps = (state, ownProps) => {
  return {
    video: state.currentVideo
  };
};

var mapDispatchToProps = (dispatch, ownProps) => {
  return {
    video: dispatch(VideoPlayer(video))
  };
};

// var mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
//   };
// };

let VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;

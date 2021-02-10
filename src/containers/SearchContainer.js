import { connect } from 'react-redux';
import Search from '../components/Search.js';
import {handleVideoSearch, changeVideoList, changeVideo} from '../actions/search.js';
import {handleInputChange} from '../components/Search.js';
import handleSearchChange from '../actions/search.js';
console.log('handle', handleSearchChange);

const mapStateToProps = (state) => ({ });

// const mapDispatchToProps = {changeVideoList, handleVideoSearch, changeVideo};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (video) => dispatch(handleSearchChange(video))
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;

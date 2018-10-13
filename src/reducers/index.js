
//makes different reducers work together
import { combineReducers } from 'redux';
import GithubReducer from './GithubReducer';

export default combineReducers({
  github: GithubReducer
});

import {
  LOGIN_CHANGE,
  PASSWORD_CHANGE,
  SUBMIT,
  SUBMIT_SUCCESS
} from '../actions/types';
const SERVER_URL = "localhost";
const INITIAL_STATE = {
  githubLogin: '',
  githubPassword: '',
  loading: false,
  uid: '',
  submitted: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case(LOGIN_CHANGE):
      return {...state, githubLogin: action.payload}
    case(PASSWORD_CHANGE):
      return {...state, githubPassword: action.payload}
    case(SUBMIT):
      return {...state, loading: true}
    case(SUBMIT_SUCCESS):
      return {...state, loading: false, uid: action.payload, submitted: true}
    default:
      return state;
  }
}

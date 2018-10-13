import {
  LOGIN_CHANGE,
  PASSWORD_CHANGE,
  SUBMIT,
  SUBMIT_SUCCESS
} from '../actions/types';
const SITE_URL = 'localhost'
export const loginChanged = (text) => {
  return {
    type: LOGIN_CHANGE,
    payload: text
  };
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  };
}

export const submit = (login, password) => {
  return (dispatch) => {
    dispatch({type: SUBMIT})
    fetch(SITE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: login,
        password
      }),
    })
    .then((res) => {
      dispatch({
        type: SUBMIT_SUCCESS,
        payload: res.headers.uid
      })
    })
    .catch((err) => {
      console.log(err)
    })
  };

}

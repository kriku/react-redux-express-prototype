import {
    USER_SIGNIN, USER_SIGNUP, USER_LOGOUT, USER_REGISTER_FAILED, USER_CREATE_SESSION_FAILED
} from "../constants/user";

export function signup(username, password, data) {
  return {
    type: USER_SIGNUP,
    payload: {
      username,
      password,
      data
    }
  };
}

export function logout() {
  return {
    type: USER_LOGOUT
  };
}

function signin({ username, password, data, dispatch }) {
  dispatch({
    type: USER_SIGNIN,
    payload: {
      username,
      password,
      data
    }
  });
}

export function createSession(body) {
  return (dispatch) => {

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const init = {
      credentials: 'include',
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    };

    const { username, password } = body;

    fetch(`/api/sessions/create`, init)
      .then(data => data.json())
      .then(data => signin({username, password, data, dispatch}))
      .catch(err => {
        register(body, dispatch);
        dispatch({
          type: USER_CREATE_SESSION_FAILED,
          error: err.statusText
        });
      });

  };
}

function register(body, dispatch){

  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const init = {
    credentials: 'include',
    headers,
    method: 'POST',
    body: JSON.stringify(body)
  };

  const { username, password } = body;
  fetch(`/api/users`, init)
    .then(data => data.json())
    .then(data => signin({username, password, data, dispatch}))
    .catch(err => {
      dispatch({
        type: USER_REGISTER_FAILED,
        error: err.statusText
      });
    });
}


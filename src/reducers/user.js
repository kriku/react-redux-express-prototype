import {
    USER_SIGNIN, USER_SIGNUP, USER_LOGOUT
} from "../constants/User";

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {

  case USER_SIGNIN:
    console.log('action.payload.data')
    console.log(action.payload.data)
    return {
      ...state,
      username: action.payload.username,
      token: action.payload.data,
      signin: true
    };

  case USER_SIGNUP:
    return {
      ...state,
      username: action.payload.username,
      token: action.payload.data,
      signin: true
    };

  case USER_LOGOUT:
    return {};

  default:
    return state;
  }
}

export default reducer;

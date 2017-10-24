function reducer(state={}, action) {
  switch (action.type) {
  case 'USER_SIGNIN':
    return {
      ...state,
      username: action.payload.username,
      signin: true
    };
  case 'USER_LOGOUT':
    return {};
  default:
    return state;
  }
}

export default reducer;

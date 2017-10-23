function reducer(state={}, action) {
  switch (action.type) {
  case 'USER_SIGHIN':
    return {
      ...state,
      name: action.payload,
      signin: true
    };
  default:
    return state;
  }
}

export default reducer;

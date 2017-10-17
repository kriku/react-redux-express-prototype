function reducer(state={}, action) {
  if (action.type === "ADD") {
    return {user: "new"};
  }
  return state;
}

export default reducer;

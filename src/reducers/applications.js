function reducer(state=[], action) {
  switch (action.type) {
  case 'ADD_DRAFT_TO_APPLICATIONS':
    return state.concat({
      quiz: action.payload.quiz
    });
  case 'UPDATE_APPLICATION':
    return state.map((application, index) => {
      if (index !== action.payload.index) return application;
      return {
        ...application,
        ...action.payload.application
      };
    });
  default:
    return state;
  }
}

export default reducer;

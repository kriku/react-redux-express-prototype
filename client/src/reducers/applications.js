import {
    ADD_DRAFT_TO_APPLICATIONS, UPDATE_APPLICATION, LOAD_FROM_LOCAL_STORAGE
} from 'constants/applications';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_FROM_LOCAL_STORAGE:
    return action.payload;

  case ADD_DRAFT_TO_APPLICATIONS:
    return state.concat({
      quiz: action.payload.quiz
    });

  case UPDATE_APPLICATION:
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

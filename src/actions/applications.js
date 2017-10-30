import {
  ADD_DRAFT_TO_APPLICATIONS, UPDATE_APPLICATION, LOAD_FROM_LOCAL_STORAGE
} from 'constants/applications';

export const addDraftToApplications = (quiz) => ({
  type: ADD_DRAFT_TO_APPLICATIONS,
  payload: { quiz }
});

export const updateApplication = (index, application) => ({
  type: UPDATE_APPLICATION,
  payload: { application, index }
});

export const loadFromStorage = (data) => ({
  type: LOAD_FROM_LOCAL_STORAGE,
  payload: data
});

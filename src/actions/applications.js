export const addDraftToApplications = (quiz) => ({
  type: 'ADD_DRAFT_TO_APPLICATIONS',
  payload: { quiz }
});

export const updateApplication = (index, application) => ({
  type: 'UPDATE_APPLICATION',
  payload: { application, index }
});

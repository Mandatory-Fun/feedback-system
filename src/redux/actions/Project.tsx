export const CREATE_NEW_FEEDBACK = "CREATE_NEW_FEEDBACK";

export function createNewFeedback(nameOfProject: string, newFeedback: string) {
  return {
    type: CREATE_NEW_FEEDBACK,
    payload: { nameOfProject, newFeedback },
  };
}

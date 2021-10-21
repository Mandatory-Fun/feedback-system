import { projectType } from "../../types";

export const CREATE_NEW_FEEDBACK = "CREATE_NEW_FEEDBACK";
export const CREATE_NEW_PROJECT = "CREATE_NEW_PROJECT";

export function createNewFeedback(nameOfProject: string, newFeedback: string) {
  return {
    type: CREATE_NEW_FEEDBACK,
    payload: { nameOfProject, newFeedback },
  };
}

export function addNewProject( newProjectData: projectType) {
  console.log('action', newProjectData)
  return {
    type: CREATE_NEW_PROJECT,
    payload: newProjectData
  }
}

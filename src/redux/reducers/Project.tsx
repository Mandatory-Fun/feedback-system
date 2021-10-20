import { PROJECTS } from "../../data/projects";
import { CREATE_NEW_FEEDBACK } from "../actions/Project";

export const initState: any = [...PROJECTS];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
    case CREATE_NEW_FEEDBACK:
      const [selectedProject] = [...state].filter(
        (el) => el.projectName === action.payload.nameOfProject
      );

      const tempProject = {
        ...selectedProject,
        listOfFeedbacks: [
          ...selectedProject.listOfFeedbacks,
          { feedbackName: action.payload.newFeedback, listOfComments: [] },
        ],
      };

      return [...state].map((el) =>
        el.projectName === action.payload.nameOfProject ? tempProject : el
      );
  }
};

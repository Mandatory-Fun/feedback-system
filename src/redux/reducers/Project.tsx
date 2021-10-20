import { PROJECTS } from "../../data/projects";

export const initState = PROJECTS;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

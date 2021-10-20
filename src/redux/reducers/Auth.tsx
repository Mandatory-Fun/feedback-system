import { SET_USER } from '../actions/Auth';

export const initState: any = {
  isSignedIn: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
    case SET_USER:
      return {
        isSignedIn: action.payload,
      };
  }
};

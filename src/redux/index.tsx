import authReducer from "./reducers/Auth";
import { combineReducers } from "redux";
import { projectReducer } from './reducers/Project';

const rootReducer = combineReducers({
  authReducer,
  projectReducer,
});

export type Store = ReturnType<typeof rootReducer>;
export default rootReducer;

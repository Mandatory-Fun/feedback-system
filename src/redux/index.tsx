import { combineReducers } from "redux";
import authReducer from "./reducers/Auth";
import projectReducer from "./reducers/Project";

const rootReducer = combineReducers({
  authReducer,
  projectReducer,
});

export type Store = ReturnType<typeof rootReducer>;
export default rootReducer;

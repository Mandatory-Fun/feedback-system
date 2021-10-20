import { applyMiddleware, compose, createStore } from "redux";
import rootReducer, { Store } from ".";

import { PROJECTS } from "../data/projects";
import thunk from "redux-thunk";

const defaultState: Store = {
  authReducer: { isSignedIn: false, email: "" },
  projectReducer: PROJECTS,
  
};

const makeStore = () => {
  const middlewares = [thunk];
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      });
    }
  }
  const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

export default makeStore;

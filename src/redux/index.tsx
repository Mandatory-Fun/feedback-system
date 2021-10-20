import { combineReducers } from 'redux';
import authReducer from './reducers/Auth';

const rootReducer = combineReducers({
  authReducer,
});

export type Store = ReturnType<typeof rootReducer>;
export default rootReducer;

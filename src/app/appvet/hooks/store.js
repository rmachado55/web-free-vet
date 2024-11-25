import { createStore, combineReducers } from 'redux';
import petReducer from './petReducer';

const rootReducer = combineReducers({
  pet: petReducer
});

const store = createStore(rootReducer);

export default store;
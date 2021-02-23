import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import temperature from './temperature';

const reducers = combineReducers({
  timeReducer,
  temperature,
});

export default reducers;

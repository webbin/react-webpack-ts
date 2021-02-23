import {
  SET_NO_TIME,
  SET_SHOW_TIME,
  SET_TIME_STEP,
} from '../constant/ActionTypes';
import { ITimeReducer } from './IStore';
const init = {
  showTime: false,
  timeData: {
    step: 1000,
  },
};

const setTimeStep = (state: ITimeReducer, step: number) => {
  const next = Object.assign({}, state);
  const { timeData } = next;
  const nextTimeData = Object.assign({}, timeData);
  nextTimeData.step = step;
  next.timeData = nextTimeData;
  return next;
};

const timeReducer = (state = init, action: { type: string; data: unknown }) => {
  const { type, data } = action;
  switch (type) {
    case SET_SHOW_TIME:
      return Object.assign({}, state, {
        showTime: true,
      });
    case SET_NO_TIME:
      return Object.assign({}, state, {
        showTime: false,
      });
    case SET_TIME_STEP:
      return setTimeStep(state, data as number);
    default:
      return state;
  }
};

export default timeReducer;

import { PUSH_TEMPERATURE } from '../constant/ActionTypes';
import { ITemperature, ITemperatureData } from './IStore';

const InitState: ITemperature = [];

const pushTemperatureData = (
  state: ITemperature = [],
  data: ITemperatureData,
) => {
  const result = Array.from(state);
  if (state.length >= 24) {
    result.shift();
  }
  result.push(data);
  return result;
};

const temperature = (
  state = InitState,
  action: { type: string; data: ITemperatureData },
) => {
  const { type, data } = action;
  switch (type) {
    default:
      return state;
    case PUSH_TEMPERATURE:
      return pushTemperatureData(state, data);
  }
};

export default temperature;

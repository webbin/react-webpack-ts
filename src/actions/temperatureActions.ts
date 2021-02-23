import { PUSH_TEMPERATURE } from '../constant/ActionTypes';

import { ITemperatureData } from '../reducers/IStore'

export const pushTemperatureData = (data: ITemperatureData) => {
  return {
    type: PUSH_TEMPERATURE,
    data,
  };
};

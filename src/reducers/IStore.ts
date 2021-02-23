/*
 * @Date: 2021-02-23 11:25:43
 * @LastEditTime: 2021-02-23 12:25:50
 * @Author: zhengweibin
 */

export type ITemperatureData = {
  temperature: number;
  humidity: number;
};

export type ITimeReducer = {
  showTime: boolean;
  timeData: {
    step: number;
  };
};
export type ITemperature = ITemperatureData[];

export type IStore = {
  timeReducer: ITimeReducer;
  temperature: ITemperature;
};

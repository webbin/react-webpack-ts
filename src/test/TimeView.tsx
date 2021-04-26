/*
 * @Author: your name
 * @Date: 2019-04-06 11:26:54
 * @LastEditTime: 2021-04-26 15:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-webpack-ts/src/test/TimeView.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Dispatch } from 'redux';

import { IStore } from '../reducers/IStore';
import { showTime, noTime, setTimeStep } from '../actions/timeActions';

type Props = {
  dispatch: Dispatch;
} & ReturnType<typeof mapState>;
class TimeView extends React.PureComponent<Props> {
  step: number;

  constructor(props: Props) {
    super(props);

    this.step = 100;
  }

  componentDidMount() {
    //
  }

  onShowTime = () => {
    this.props.dispatch(showTime());
  };

  onNoTime = () => {
    this.props.dispatch(noTime());
  };

  onSetTimeStep = () => {
    this.step += 1;
    this.props.dispatch(setTimeStep(this.step));
  };

  onKeepTimeStep = () => {
    this.props.dispatch(setTimeStep(this.step));
  };

  render() {
    console.log('time view render');
    return (
      <div
        style={{
          alignItems: 'flex-start',
        }}
      >
        this is time view
        <p>{this.props.showTime.toString()}</p>
        <button type="button" style={{ margin: 5 }} onClick={this.onShowTime}>
          show time
        </button>
        <button type="button" style={{ margin: 5 }} onClick={this.onNoTime}>
          no time
        </button>
        <button
          type="button"
          style={{ margin: 5 }}
          onClick={this.onSetTimeStep}
        >
          set time step
        </button>
        <button
          type="button"
          style={{ margin: 5 }}
          onClick={this.onKeepTimeStep}
        >
          keep time step
        </button>
      </div>
    );
  }
}

const getTimeReducer = (store: IStore) => store.timeReducer;

const getShowTime = createSelector(
  [getTimeReducer],
  (timeReducer) => timeReducer.showTime,
);

const getTimeData = createSelector([getTimeReducer], (timeReducer) => {
  console.log('time data calculating...');
  return timeReducer.timeData;
});

const mapState = (store: IStore) => ({
  showTime: getShowTime(store),
  timeData: getTimeData(store),
});

export default connect(mapState)(TimeView);

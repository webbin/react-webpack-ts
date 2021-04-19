/*
 * @Author: your name
 * @Date: 2021-01-16 10:23:49
 * @LastEditTime: 2021-04-19 17:14:47
 * @LastEditors: weibin.zheng
 * @Description: In User Settings Edit
 * @FilePath: /react-webpack-ts/src/root/Root.tsx
 */
import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import './Root.css';

import Temperature from '../pages/temperature/Temperature';
import UploadTemperature from '../pages/temperature/UploadTemperature';
import TimeView from '../test/TimeView';
import Main from '../pages/main/Main';

import LeftNavigator from './LeftNavigator';
import PagesConfig from './PagesConfig';
import UriEncodePage from '../pages/uri/UriEncodePage';


// eslint-disable-next-line @typescript-eslint/ban-types
type Props = RouteComponentProps<{}>
export default class Root extends Component<Props> {
  constructor(props: Props) {
    super(props);
    const { match } = this.props;
    console.log('root path = ', match);
  }

  render(): React.ReactNode {
    const {
      match: { path },
    } = this.props;

    return (
      <div className='root-container'>
        <LeftNavigator path={path} />
        <Switch>
          <Route path={`${path}/${PagesConfig[0].page}`} component={Main} />
          <Route path={`${path}/${PagesConfig[2].page}`} component={TimeView} />
          <Route
            path={`${path}/${PagesConfig[3].page}`}
            component={Temperature}
          />
          <Route
            path={`${path}/${PagesConfig[4].page}`}
            component={UploadTemperature}
          />
          <Route
            path={`${path}/${PagesConfig[5].page}`}
            component={UriEncodePage}
          />
        </Switch>
      </div>
    );
  }
}

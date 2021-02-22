/*
 * @Author: your name
 * @Date: 2021-01-16 10:23:49
 * @LastEditTime: 2021-01-23 09:37:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-webpack-ts/src/root/Root.tsx
 */
import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

import './Root.css';

import ImageListIndex from '../pages/imgs/ImageListIndex';
import BingImageDetail from '../pages/bing/BingImageDetail';
import Temperature from '../pages/temperature/Temperature';
import UploadTemperature from '../pages/temperature/UploadTemperature';
import TimeView from '../test/TimeView';
import Main from '../pages/main/Main';

import LeftNavigator from './LeftNavigator';
import PagesConfig from './PagesConfig';
import UriEncodePage from '../pages/uri/UriEncodePage';

export default class Root extends Component {
  constructor(props) {
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
        <LeftNavigator path={path} history={this.props.history} />
        <Switch>
          <Route path={`${path}/${PagesConfig[0].page}`} component={Main} />
          <Route
            path={`${path}/${PagesConfig[1].page}`}
            component={ImageListIndex}
          />
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
          <Route
            path='/main/imgDetail/:type/:url'
            component={BingImageDetail}
          />
        </Switch>
      </div>
    );
  }
}

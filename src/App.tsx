/*
 * @Date: 2021-01-21 20:56:42
 * @LastEditTime: 2021-04-19 17:19:58
 * @Author: zhengweibin
 */
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MockBrowser from './component/MockBrowser';
import Root from './root/Root';
import './App.css';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <MockBrowser />
        <Switch>
          <Route path="/main" component={Root} />
          <Redirect to="/main" />
        </Switch>
      </div>
    );
  }
}

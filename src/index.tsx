/*
 * @Date: 2021-01-21 20:57:56
 * @LastEditTime: 2021-04-26 15:36:18
 * @Author: zhengweibin
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './reducers/store';
import App from './App';

const Index = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDom.render(<Index />, document.getElementById('root'));

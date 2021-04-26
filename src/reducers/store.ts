/*
 * @Date: 2021-02-23 14:41:58
 * @LastEditTime: 2021-04-26 15:38:56
 * @Author: zhengweibin
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './index';

const enhancer = applyMiddleware(logger);
const store = createStore(reducers, enhancer);

export default store;

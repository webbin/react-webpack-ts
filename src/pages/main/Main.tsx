/*
 * @Author: weibin.zheng
 * @Date: 2021-02-23 10:38:43
 * @LastEditTime: 2021-04-27 12:29:20
 * @LastEditors: Please set LastEditors
 * @Description: content
 * @FilePath: /react-webpack-ts/src/pages/main/Main.tsx
 */
import React from 'react';
import { NavLink, Route, RouteComponentProps } from 'react-router-dom';
import { Button, Switch } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
// import 'antd-mobile/dist/antd-mobile.less';

import './main.css';
// import TimeView from '../../test/TimeView';
// import FileList from '../../fileManage/FileList';
type Props = RouteComponentProps<{}>;

type State = {
  checked: boolean;
};

class Main extends React.PureComponent<Props, State> {
  constructor(params: Props) {
    super(params);

    this.state = {
      checked: false,
    };
  }

  componentDidMount(): void {
    console.log(' props in main page ', this.props);
  }

  goToBasic = (): void => {
    const { history } = this.props;
    history.push('/basic');
  };

  render(): React.ReactNode {
    const { history } = this.props;
    // console.log(' link path = ', `${match.path}/location`);
    return (
      <div>
        <span className="main-title">Main Page</span>
        <div
          style={{
            marginBottom: 30,
          }}
        >
          <button
            type="button"
            className="nav_button"
            onClick={() => {
              history.push('/basic');
            }}
          >
            Go To Basic
          </button>

          <div>
            <Switch
              checked={this.state.checked}
              onChange={(value) => {
                this.setState({ checked: value });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './MockBroswer.css';

type Params = {};

type Props = RouteComponentProps<Params>;

type States = { path: string };
class MockBrowser extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      path: '',
    };
  }

  componentDidMount() {
    this.setState({ path: this.props.location.pathname });
  }

  UNSAFE_componentWillReceiveProps(newProps: Props) {
    this.setState({ path: newProps.location.pathname });
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ path: e.target.value });
  };

  onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.history.push(this.state.path);
    }
  };

  render() {
    const { goForward, goBack } = this.props.history;
    const {
      location: { pathname },
    } = this.props;

    return (
      <div className="mock-browser">
        <nav>
          <button className="outline" onClick={goBack}>
            ◀︎
          </button>{' '}
          <button className="outline" onClick={goForward}>
            ▶
          </button>
        </nav>
        <div className="path">
          <div>http://webbin.cn</div>
          <div>
            <input
              className="mock-browser-input"
              value={this.state.path}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MockBrowser);

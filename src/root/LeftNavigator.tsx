import React, { Component } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

import './Root.css';
import PagesConfig, { IConfig } from './PagesConfig';

type Params = { path: string };
type Props = Params & RouteComponentProps<Params>;
type States = { pages: IConfig[] };

class LeftNavigator extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      pages: PagesConfig,
    };
  }

  renderItem = (item: IConfig, index: number): React.ReactNode => {
    const { name, page } = item;
    const { path } = this.props;

    return (
      <NavLink
        className="nav"
        key={index.toString()}
        to={`${path}/${page}`}
        activeClassName="tab-active"
      >
        {name}
      </NavLink>
    );
  };

  render(): React.ReactNode {
    const { pages } = this.state;
    return <div className="left-navigator">{pages.map(this.renderItem)}</div>;
  }
}

export default withRouter(LeftNavigator);
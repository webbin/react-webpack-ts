import React from 'react';
import { NavLink, Switch, Route, RouteComponentProps } from 'react-router-dom';

import './main.css';
// import TimeView from '../../test/TimeView';
// import FileList from '../../fileManage/FileList';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = RouteComponentProps<{}>
class Main extends React.PureComponent<Props> {
  componentDidMount(): void {
    console.log(' props in main page ', this.props);
  }

  goToBasic = (): void => {
    const { history } = this.props;
    history.push('/basic');
  };

  render(): React.ReactNode {
    const {history } = this.props;
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
						className="nav_button"
						onClick={() => {
							history.push('/basic');
						}}
					>
						Go To Basic
					</button>
				</div>
				{/* <div className="nav">
					<NavLink
						to="/main/location"
						activeClassName="tab_active"
					>
						AppLocation
					</NavLink>
					<NavLink
						to="/main/time"
						activeClassName="tab_active"
					>
						AppTime
					</NavLink>
					<NavLink
						activeClassName="tab_active"
						to="/main/config"
					>
						AppConfig
					</NavLink>
				</div>
				<Switch>
					<Route path={`${match.path}/time`} component={TimeView}/>
					<Route
						path='/main/config'
						render={() => {
							return (
								<div>
									Main Config
								</div>
							);
						}}
					/>
					<Redirect to={`${match.path}/location`}/>
				</Switch> */}
			</div>
		);
  }
}

export default Main;

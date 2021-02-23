/*
 * @Author: your name
 * @Date: 2019-09-08 16:22:23
 * @LastEditTime: 2021-02-23 10:43:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-webpack-ts/src/pages/imgs/ImageListIndex.tsx
 */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

function AppHomePage() {
	return (
		<div>
			App Home
		</div>
	);
}

function UserSubLayout() {
	return (
		<div>
			User Layout
		</div>
	);
}


function ProductSubLayout() {
	return (
		<div>
			Product Layout
		</div>
	);
}

const renderImgIndex = () => <div>Img Index</div>;


type Props = {
	
};

export default class ImageListIndex<Props> extends React.PureComponent {
	goToMain = () => {
		const { history } = this.props;
		history.push('/');
	};

	render() {
		const { match } = this.props;
		return (
			<div>
				<p className="main-title">
					Image List Index
				</p>

				<button className="nav_button" onClick={this.goToMain}>
					Go To Main
				</button>

				{/* <div className="nav">
					<NavLink to="/img/index" activeClassName="tab_active">
						Index
					</NavLink>
					<NavLink to="/img/title" activeClassName="tab_active">
						Img Title
					</NavLink>
					<NavLink to="/img/list" activeClassName="tab_active">
						Img list
					</NavLink>
				</div>
				<Switch>
					<Route exact path={`${match.path}/index`} render={renderImgIndex} />
					<Route path={`${match.path}/title`} component={UserSubLayout} />
					<Route path={`${match.path}/list`} component={BingImageList} />
					<Redirect to={`${match.url}/index`} />
				</Switch> */}
			</div>
		)
	}
}

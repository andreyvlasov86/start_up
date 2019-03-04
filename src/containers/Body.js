import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import routerConfig from '../constants/routerConfig'
import Navigation from '../containers/Navigation';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


export default class Body extends Component {

	constructor(props) {
		super(props);
	}


	render() {

		const routes = routerConfig.map(route => (
			<Route
				key={route.id}
				path={route.path}
				component={route.component}
			/>
		));

		routerConfig.map(route => (
			route.subitems.map(subitem => (
				routes.push(
					<Route
						key={subitem.id}
						path={subitem.path}
						component={subitem.component}
					/>)
				))
			));

		console.log('routes', routes);

		return (
			<div>
				<Header />
				<div className='container-fluid main-container'>
					<div className='row'>
						<div className='col-lg-auto App-navigation'>
							<Navigation />
						</div>
						<div className='col-lg col-xs content-container'>
							{routes}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
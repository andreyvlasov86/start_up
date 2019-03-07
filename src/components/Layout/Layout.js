import React, {Component} from 'react'
import Navigation from '../../components/Common/NavigationBar/navigationBar';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import {routes} from '../../routes/router';

export default class Layout extends Component {

	constructor(props) {
		super(props);
	}

	render() {

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
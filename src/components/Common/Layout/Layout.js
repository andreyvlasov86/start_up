import React, {Component} from 'react'
import Navigation from '../NavigationBar/navigationBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {routes} from '../../../routes/router';

export default class Layout extends Component {

	render() {

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
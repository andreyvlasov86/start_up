import React, {Component} from 'react';
import Logout from '../Auth/Logout/Logout';
import Timer from '../Timer/Timer';


export default class Header extends Component {

	render() {
		return (
			<header className='container-fluid header'>
				<div className='col-lg-3 header-logo'>
					Admin Area
				</div>
				<div className='col-lg-6'>
					<Timer />
				</div>
				<div className='col-lg-3 text-right'>
					<Logout />
				</div>
			</header>
		)
	}
}
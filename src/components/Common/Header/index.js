import React, {Component} from 'react'
import Logout from '../../Auth/Logout'


export default class Header extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<header className='container-fluid header'>
				<div className='col-lg-4 header-logo'>
					Admin Area
				</div>
				<div className='col-lg-4'></div>
				<div className='col-lg-4 text-right'>
					<Logout />
				</div>
			</header>
		)
	}
}
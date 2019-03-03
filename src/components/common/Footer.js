import React, {Component} from 'react'


export default class Footer extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<footer className='container-fluid footer'>
				<div className='col-lg-2 offset-10 footer-link'>
					Powered by <a href='https://ideus.biz' target="_blank">iDeus</a>
				</div>
			</footer>
		)
	}
}
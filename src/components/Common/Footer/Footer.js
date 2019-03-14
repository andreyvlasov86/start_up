import React, {Component} from 'react'


export default class Footer extends Component {

	render() {
		return (
			<footer className='container-fluid footer'>
				<div className='col-lg-2 offset-10 footer-link'>
					Powered by
					<a href='https://ideus.biz' target="_blank">
						<span className='comp-i'>i</span>
						<span className='comp'>Deus</span>
					</a>
				</div>
			</footer>
		)
	}
}
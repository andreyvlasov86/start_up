import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { logout } from '../../../../store/auth/actions'


class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(e) {
        //e.preventDefault();
        this.props.logout()
    }

    render() {
        return (
            <div>
                <button className='btn btn-danger btn-sm' onClick={this.handleClick.bind(this)}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
    }, dispatch);

export default connect(null, mapDispatchToProps)(Logout);

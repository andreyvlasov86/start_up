import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { logout } from '../../../../store/auth/actions'


class Logout extends Component {

    handleClick(e) {
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


const mapStateToProps = state => {
    return (
        {data: state.auth }
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

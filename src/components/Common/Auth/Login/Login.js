import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { login } from '../../../../store/auth/actions'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.username && this.state.password) {
             this.props.login(this.state.username, this.state.password)
        }

    }

    render() {
        return (
            <div className='App-header'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label
                            className='col-form-label-sm'
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            className='form-control form-control-sm'
                            id='username'
                            type='username'
                            name='username'
                            onChange={this.handleChange.bind(this)}
                            placeholder='Username'/>
                        <label
                            className='col-form-label-sm'
                            htmlFor="password">
                            Passwords
                        </label>
                        <input className='form-control form-control-sm'
                               id='password'
                               type='password'
                               name='password'
                               onChange={this.handleChange.bind(this)}
                               placeholder='Password'/>
                        <button className='btn btn-primary btn-sm' type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    login
    }, dispatch);

export default connect(null, mapDispatchToProps)(Login);

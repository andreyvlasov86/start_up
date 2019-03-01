import React, {Component} from 'react'
import { connect } from 'react-redux'
import Main from '../containers/main';
import Login from '../containers/Auth/Login'


const mapStateToProps = state => {
    console.log('state_auth', state.auth);
    return (
        {data: state.auth.user }
    )
};


class App extends Component {

        constructor(props) {
                super(props);
        }

        render() {
                const isLoggedIn = this.props.data.isLoggedIn;
                return(
                    isLoggedIn ? <Main /> : <Login />
                )
        }
}

export default connect(mapStateToProps)(App);
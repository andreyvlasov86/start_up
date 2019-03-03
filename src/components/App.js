import React, {Component} from 'react'
import { connect } from 'react-redux'
import Body from '../containers/body';
import Login from '../containers/Auth/Login'
import { BrowserRouter as Router } from 'react-router-dom';



const mapStateToProps = state => {
    console.log('state', state);
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
                    isLoggedIn ? <Router><Body /></Router> : <Login />
                )
        }
}

export default connect(mapStateToProps)(App);
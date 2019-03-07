import React, {Component} from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Common/Auth/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "../Layout/Layout";



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
                const token = this.props.data.token;
                return(
                    token ? <Router><Layout /></Router> : <Login />
                )
        }
}

export default connect(mapStateToProps)(App);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Common/Auth/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "../Common/Layout/Layout";
import './App.css';



const mapStateToProps = state => {
    return (
        {data: state.auth }
    )
};


class App extends Component {


        render() {
                const token = this.props.data.token.access_token;
                return(
                    token ? <Router><Layout /></Router> : <Login />
                )
        }
}

export default connect(mapStateToProps)(App);

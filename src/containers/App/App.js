import React, {Component} from 'react'
import { connect } from 'react-redux'
import Body from './Body';
import Login from '../../components/Auth/Login'
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
                const token = this.props.data.token;
                return(
                    token ? <Router><Body /></Router> : <Login />
                )
        }
}

export default connect(mapStateToProps)(App);
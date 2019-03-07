import { connect } from 'react-redux'
import showUserData from './showUserData';


const mapStateToProps = state => {
    console.log('state_auth', state.auth);
    return (
        {data: state.auth.user }
    )
};


export default connect(mapStateToProps)(showUserData);
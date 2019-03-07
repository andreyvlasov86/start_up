import { connect } from 'react-redux'
import showUserData from '../../components/Users/showUserData'


const mapStateToProps = state => {
    console.log('state_auth', state.auth);
    return (
        {data: state.auth.user }
    )
};


export default connect(mapStateToProps)(showUserData);
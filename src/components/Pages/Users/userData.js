import { connect } from 'react-redux'
import showUserData from './showUserData';


const mapStateToProps = state => {
    return (
        {data: state.auth }
    )
};


export default connect(mapStateToProps)(showUserData);